'use strict';

const _ = require('lodash');
const config = require('../config');

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
    const help = command.help;
    return _.defaults({
        title: index === 0 ? 'Available commands:' : undefined,
        text: '`/battleship ' + help.name +'` ' + help.description
    }, attachmentDefaults);
};

const handler = (payload, res) => {
  const commands = require('../commands');
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: commands.map(buildAttachment)
  }, msgDefaults);

  res.set('content-type', 'application/json');
  res.status(200).json(msg);
  return
};

const help = {
    name: 'help',
    description: '... you\'re lookin at it!\n'
};

module.exports = {
    pattern: /help/ig,
    handler: handler,
    help: help
}
