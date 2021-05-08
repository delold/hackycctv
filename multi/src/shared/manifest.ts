interface IManifestConfig {
  segmentSize: number
}

interface IManifestSegment {
  extinf: string
  filename: string
}

export function getManifest(
  config: IManifestConfig,
  segments: IManifestSegment[],
  seq: number,
  end = false
) {
  const buffer = [
    "#EXTM3U",
    "#EXT-X-VERSION:3",
    `#EXT-X-TARGETDURATION:${config.segmentSize}`,
    `#EXT-X-MEDIA-SEQUENCE:${seq}`,
  ]
  segments.forEach(({ filename, extinf }) => {
    buffer.push(`#EXTINF:${extinf || "4.000"},`)
    buffer.push(filename)
  })

  if (end) {
    buffer.push("#EXT-X-ENDLIST")
  }

  return buffer.join("\n") + "\n"
}
