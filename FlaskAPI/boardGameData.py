import requests

def get_boardgames(game_params):
    max_players = game_params['max_players']
    max_playtime = int(game_params['max_playtime']) + 1
    min_rating = float(game_params['min_rating']) - 0.01

    atlasURL = 'https://api.boardgameatlas.com/api/search?player_counts=' + str(max_players) + \
        '&lt_max_playtime=' + str(max_playtime) + \
        '&gt_average_user_rating=' + str(min_rating) + '&client_id=Q0gY3mITdP'
    atlasResponse = requests.get(atlasURL)
    atlasJson = atlasResponse.json()
    
    results = {}
    for game in atlasJson['games']:
        players = ""
        playtime = ""
        rating = 0.0
        if game['min_players'] == game['max_players']:
            players = str(game['min_players'])
        else:
            players = str(game['min_players']) + "-" + str(game['max_players'])

        if game['min_playtime'] == game['max_playtime']:
            playtime = str(game['min_playtime'])
        else:
            playtime = str(game['min_playtime']) + "-" + str(game['max_playtime'])

        rating = round_rating(game['average_user_rating'])
        image_url = game['images']['small']
        game_url = game['url']

        results[game['name']] = {
            'players': players,
            'playtime': playtime,
            'rating': rating,
            'image': image_url,
            'url': game_url
            }
    return results


def round_rating(number):
    """Round a number to the closest half integer.
    >>> round_of_rating(1.3)
    1.5
    >>> round_of_rating(2.6)
    2.5
    >>> round_of_rating(3.0)
    3.0
    >>> round_of_rating(4.1)
    4.0"""

    return round(number * 2) / 2

print(get_boardgames({'max_players': '5', 'max_playtime': '15', 'min_rating': '2.5'}))