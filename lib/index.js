module.exports = {
  processors: {
    '.phtml': {
      preprocess: (text, filename) => [text.replace(/<\?.*\?>/g, '0')],
      postprocess: (messages, filename) => messages[0]
    }
  }
}

