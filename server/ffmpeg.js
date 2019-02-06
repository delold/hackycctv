const path = require('path')
const cp = require("child_process")

module.exports = class Ffmpeg {
    constructor(config, folder, address) {
        this.config = config
        this.folder = folder
        this.instance = null

        this.stopped = false

        this.params = [
            `-i`, address,
            `-rtsp_transport`, `tcp`,
            `-rtsp_flags`, `prefer_tcp`,
            `-c`, `copy`,
            `-hls_time`, config.segmentSize(),
            `-use_localtime_mkdir`, `1`,
            `-hls_start_number_source`, `epoch`,
            `-use_localtime`, `1`,
            `-timeout`, `-1`,
            `-hls_flags`, `second_level_segment_duration`,
            `-hls_segment_filename`, path.resolve(config.base(), folder, config.segmentName()),
            path.resolve(config.base(), folder, config.name()),
        ]

        console.log('ffmpeg', this.params.join(' '))
    }

    start() {
        this.instance = cp.spawn('ffmpeg', this.params)
        this.instance.stdout.on("data", (data) => console.log(data.toString()))
        this.instance.stderr.on("data", (data) => console.log(data.toString()))
    }

    loop() {
        this.start()
        this.instance.on('exit', () => {
            console.log('process stopped', this.folder, this.stopped)
            if (!this.stopped) {
                setTimeout(() => this.loop(), 500)
            }
        })
    }

    stop() {
        this.stopped = true
        if (this.instance) {
            this.instance.stdin.pause()
            this.instance.kill()
        }
    }
}
