export const getRootDomain = url => {
  let hostname = url
  if (url.indexOf('://') > -1) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }

  // find & remove port number
  hostname = hostname.split(':')[0]
  // find & remove "?"
  hostname = hostname.split('?')[0]
  return truncString(hostname, 15)
}

export const truncString = (str, length) => (
  str.length > length ? `${str.substr(0, length - 1)}...` : str
)
