'use strict'

const path = require('path')
const express = require('express')
const tus = require('tus-node-server')

const MEDIA_SLUG = '/media'
const MEDIA_PATH = path.join(__dirname, MEDIA_SLUG)

const app = express()

app.listen(8000)

const uploadApp = express()
const tusServer = new tus.Server()
tusServer.datastore = new tus.FileStore({
    directory: MEDIA_PATH,
    path: MEDIA_SLUG,
    // namingFunction: req => {

    // }
})

uploadApp.all('*', tusServer.handle.bind(tusServer))

app.use(MEDIA_SLUG, uploadApp)