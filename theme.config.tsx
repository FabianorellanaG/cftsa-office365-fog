import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>CFT San Agustín</span>,

  sidebar: {
    defaultMenuCollapseLevel: 10,
    toggleButton: false,
  },

  toc: {
    float: false,
  },

  navigation: false,

  editLink: {
    component: null,
  },

  feedback: {
    content: null,
  },

  navbar: {
  extraContent: null,
}
}

export default config
