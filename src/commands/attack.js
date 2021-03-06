'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
    response_type: 'in_channel',
    username: config('USERNAME'),
    text: "Not implemented :hankey:",
    icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {
    let msg = _.defaults({
        channel: payload.channel_name,
    }, msgDefaults)

    res.set('content-type', 'application/json')
    res.status(200).json(msg)

    return
}

const help = {
    name: 'attack [coordinate]',
    description: 'Place an attack on your opponent'
};

module.exports = {
    pattern: /attack/ig,
    handler: handler,
    help: help  
}
