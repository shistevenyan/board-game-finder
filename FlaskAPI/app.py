from flask import Flask, request
from flask_cors import CORS, cross_origin
from boardGameData import *

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/boardgame-result', methods=['GET'])
@cross_origin(support_credentials=True)
def boardgame_result():
    if request.method == "GET":
        game_params = {}
        game_param_player = request.args.get('max_players')
        game_param_playtime = request.args.get('max_playtime')
        game_param_rating = request.args.get('min_rating')

        game_params['max_players'] = game_param_player
        game_params['max_playtime'] = game_param_playtime
        game_params['min_rating'] = game_param_rating

        if game_params:
            return get_boardgames(game_params)

        return {"results": [], "error_msg": "Bad data"}, 400

if __name__ == '__main__':
    app.run(debug=True)
