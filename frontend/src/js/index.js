import '../scss/main.scss'

import Uppy from '@uppy/core'
import UppyTus from '@uppy/tus'
import Dashboard from '@uppy/dashboard'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const uppy = Uppy()
    .use(Dashboard, {
        trigger: '#drag-drop-area',
        inline: true
    })
    .use(UppyTus, {
        endpoint: 'http://localhost:8000/media'
    })

uppy.on('complete', result => {
    console.log('Uppy Complete Result', result)
})