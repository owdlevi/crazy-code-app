export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Nunito,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  sizes: {
    container: ['40em', '52em', '960px']
  },
  layout: {
    container: {
      maxWidth: '960px',
      mx: 'auto',
      p: 4
    }
  },
  colors: {
    text: '#000',
    background: '#fff',
    headerbg: '#fff',
    title: '#f4f7fc',
    primary: '#fafafa',
    accent: '#3F51B5',
    accentColor: '#fff',
    modes: {
      dark: {
        text: '#000',
        background: 'salmon',
        todobg: '#f4f7fc',
        primary: 'lightskyblue'
      }
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    header: {
      width: '100%',
      boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)',
      height: '64px',
      backgroundColor: 'headerbg',
      display: 'flex',
      alignItems: 'center',
      px: 4,
      position: 'fixed',
      top: 0
    },
    footer: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      p: 4,
      borderTop: '1px solid #dadce0',
      backgroundColor: 'headerbg'
    },
    main: {
      mt: 6,
      pb: 6
    },
    navlink: {
      color: 'text',
      textDecoration: 'none',
      display: 'inline-block'
    },
    button: {
      color: 'text'
    },
    ctabutton: {
      color: 'text',
      borderRadius: '3px',
      height: '56px',
      display: 'inline-flex',
      letterSpacing: '1px',
      outline: 0,
      backgroundColor: 'accent',
      color: 'accentColor',
      p: 3,
      textTransform: 'uppercase',
      fontSize: 1,
      alignItems: 'center',
      justifyContent: 'center',
      textRendering: 'optimizeSpeed',
      transition: 'background-color .2s,box-shadow .2s',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      border: 0,
      cursor: 'pointer',
      ':hover': {
        outline: 'none',
        textDecoration: 'none',
        boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)'
      }
    },
    input: {
      lineHeight: '2em',
      borderRadius: '3px',
      border: 0,
      display: 'inline-block',
      margin: '15px 0',
      padding: '0.2em 1em',
      fontSize: '1em'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
      mt: 5,
      mb: 3,
      fontWeight: '500'
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    }
  }
}
