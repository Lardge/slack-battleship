# Battleship for Slack

### Supported `/slash` commands


### Commands
Play in Direct Messaging to other user.
```
play // start a game with another user
concede // concede a game with another user
board // gives both your current board and the attacks you've made on the opponents board
attack <coordinate> // Returns error message if: Not your turn, coordinate not found, already attacked coordinate

// Bonus
scoreboard
```

### Inspiration

![inspiration](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Battleship_game_board.svg/500px-Battleship_game_board.svg.png "inspiration")


### Install

```shell
$ npm install
```

### Copy `.env-example` to `.env`

```shell
$ cp .env-example .env
```

### Configure

```shell
SLACK_TEAM_TOKEN=xoxb...8WRqKWx
NODE_ENV=development
PORT=3000
```
### Run

```shell
$ npm start

```

Visit [localhost:3000](http://localhost:3000).

### Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

_Or with the [Heroku Toolbelt](https://toolbelt.heroku.com)_

```shell
$ heroku create {optional-app-name}

Creating app... done, stack is cedar-14
https://blooming-scrubland-64464.herokuapp.com/

$ git push heroku master
...
remote: -----> Node.js app detected
...
remote:        https://blooming-scrubland-64464.herokuapp.com/ deployed to Heroku
...
To https://git.heroku.com/blooming-scrubland-64464.git
 * [new branch]      master -> master

$ heroku open
```

### License

Credits to [Starbot](https://github.com/mattcreager/starbot)
