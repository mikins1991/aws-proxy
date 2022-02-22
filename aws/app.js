if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const express = require('express')
  const { createProxyMiddleware } = require('http-proxy-middleware')
  const cors = require('cors')
  const app = express()
  
  const querystring = require('querystring')
  const multer = require('multer')
  const upload = multer()
  
  // Configuration
  
  const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL
  const API_INTERNAL_URL = process.env.API_URL
  const WIDGETS_API_URL = process.env.WIDGETS_API_URL

  app.use(cors())

  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
  })

  app.use(
    '/oauth',
    createProxyMiddleware({
      target: AUTH_SERVICE_URL,
      changeOrigin: true,
      secure: false,
    })
  )
  
  app.use(
    '/mapping',
    createProxyMiddleware({
      target: API_INTERNAL_URL,
      changeOrigin: true,
      secure: false,
    })
  )
  
  app.use(
    '/widgets',
    createProxyMiddleware({
      target: WIDGETS_API_URL,
      changeOrigin: true,
      secure: false,
    })
  )
  
  app.use(
    '/channels',
    createProxyMiddleware({
      target: API_INTERNAL_URL,
      changeOrigin: true,
      secure: false,
    })
  )

  module.exports = app