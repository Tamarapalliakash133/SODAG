import { useState } from 'react'
import { accentFor } from '../lib/contributors.js'

const SIZES = {
  md: 'size-14 text-xl',
  lg: 'size-28 text-4xl sm:size-32',
}

function Avatar({ contributor, size = 'md' }) {
  const [failed, setFailed] = useState(false)
  const { bg, fg } = accentFor(contributor.slug)
  const classes = `${SIZES[size]} shrink-0 rounded-full`

  if (contributor.github && !failed) {
    return (
      <img
        src={`https://github.com/${encodeURIComponent(contributor.github)}.png?size=256`}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
        className={`${classes} object-cover`}
        style={{ backgroundColor: bg }}
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      className={`${classes} grid place-items-center font-bold`}
      style={{ backgroundColor: bg, color: fg }}
    >
      {contributor.name.charAt(0).toUpperCase()}
    </span>
  )
}

export default Avatar
