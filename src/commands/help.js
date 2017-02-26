'use strict';

const _ = require('lodash');
const config = require('../config');
const commands = require('../commands');

const msgDefaults = {
  response_type: 'in_channel',
  username: config('USERNAME'),
  icon_emoji: config('ICON_EMOJI')
};

const attachmentDefaults = {
    color: '#E3E4E6',
    mrkdwn_in: ['text']
};

const buildAttachment = (command, index) => {
    return _.defaults({
        title: index === 0 ? 'Available commands:' : undefiend,
        text: '`' + command.name +'` ' + command.description
    }, attachmentDefaults);
};

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: commands.map(buildAttachment)
  }, msgDefaults);

  res.set('content-type', 'application/json');
  res.status(200).json(msg);
  return
};

module.exports = {
    pattern: /help/ig,
    handler: handler,
    name: 'help',
    description: '... you\'re lookin at it!\n'
}
