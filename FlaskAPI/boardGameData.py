import requests
import random

def get_boardgames(game_params):
    max_players = game_params['max_players']
    max_playtime = game_params['max_playtime']
    min_rating = game_params['min_rating']

    atlasURL = 'https://api.boardgameatlas.com/api/search?player_counts=' + max_players + \
        '&lt_max_playtime=' + max_playtime + '&client_id=Q0gY3mITdP'
    atlasResponse = requests.get(atlasURL)
    atlasJson = atlasResponse.json()
    
    results = {}
    for game in atlasJson['games']:
        if float(game['average_user_rating']) >= float(min_rating):
            results[game['name']] = {
                'min_players': game['min_players'],
                'max_players': game['max_players'],
                'min_playtime': game['min_playtime'],
                'max_playtime': game['max_playtime'],
                'rating': game['average_user_rating']
                }
    return results
