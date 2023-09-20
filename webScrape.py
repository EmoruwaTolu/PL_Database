from os import stat
import requests
import time
from bs4 import BeautifulSoup

def leagueRosterCreator(url):

    html = requests.get(url)
    s = BeautifulSoup(html.content, 'html.parser')

    leagueyearid = s.find(id="results2021-202291_overall")
    leagues = leagueyearid.find("tbody")

    teamInLeague = leagues.find_all("tr")
    linksToTeams = []

    for teams in teamInLeague:
        linksToTeams.append(teams.td.a['href'])

    print(linksToTeams)
    return linksToTeams
    

def teamRosterCreator(url):

    html = requests.get(url)

    s = BeautifulSoup(html.content, 'html.parser')

    team_roster = s.find("table")
    links =  team_roster.find("tbody")
    players = links.find_all("th")

    # i = 0 
    playerLinks = []
    for playerUrls in players:
        playLink = "https://fbref.com" + str(playerUrls.a['href'])
        # pos = players[i]
        # p = pos.find_all("td")
        # print(p[1].text)#left here in case you ever want to inclus players with multiple positions
        # i = i + 1
        playerLinks.append(playLink)

    return(playerLinks)


def playerStandardStatsMaker(url, file):
    print(url)
    html = requests.get(url)

    s = BeautifulSoup(html.content, 'html.parser')

    checkingPosMF = s.find(id="scout_full_MF")
    checkingPosCB = s.find(id="scout_full_CB")
    checkingPosGK = s.find(id="scout_full_GK")
    checkingPosFW = s.find(id="scout_full_FW")
    checkingPosAM = s.find(id="scout_full_AM")
    checkingPosFB = s.find(id="scout_full_FB")

    name = s.find("h1")
    imagediv = s.find(id="meta")
    
    if checkingPosGK != None:
        file.write(name.text + "GK ")
        print(name.text + " GK")
    elif checkingPosMF != None:
        file.write(name.text + "MF ")
        print(name.text + " MF")
    elif checkingPosCB != None:
        file.write(name.text + "CB ")
        print(name.text + " CB")
    elif checkingPosFW != None:
        file.write(name.text + "FW ")
        print(name.text + " FW")
    elif checkingPosAM != None:
        file.write(name.text + "AM ")
        print(name.text + " AM")
    elif checkingPosFB != None:
        file.write(name.text + "FB ")
        print(name.text + " FB")
    else:
        file.write(name.text)
        print(name.text)
    
    data = s.find(id="all_scout_full")
    tableData = data.find('table')
    tData = tableData.find('tbody')
    tableRows = tData.find_all('tr')

    if(checkingPosMF is None and checkingPosCB is None and checkingPosGK is None and checkingPosFW is None and checkingPosAM is None
    and checkingPosFB is None):
        print("we don't got that")
    else:
        print("he has it")
        for tr in tableRows:
            time.sleep(3)
            if not tr.get('class'):
                file.write(tr.td.text + "      ")
                print(tr.th.text + "       " +tr.td.text)
    
    if(imagediv != None):
        image = imagediv.find('img')
        file.write(' ' + image['src'])
        print(image['src'])


def specificSeason(url):

    html = requests.get(url)
    s = BeautifulSoup(html.content, 'html.parser')
    final_link = ""

    hold = s.find(id="bottom_nav_container")
    uls = hold.find_all('ul')[-1]

    links = uls.find_all('a')

    for a in links:
        if(a.text == '2021-2022 Premier League'):
            final_link = a['href']
    
    print(final_link)
    return(final_link)


# f = open("playerStats.txt", "a")
# playerStandardStatsMaker("https://fbref.com/en/players/79300479/Martin-Odegaard", f)
# teamLinks = leagueRosterCreator("https://fbref.com/en/comps/9/2021-2022/2021-2022-Premier-League-Stats")

# for link in teamLinks:
#     namingInfo = link.split("/")
#     file1 = open(namingInfo[5]+".txt", "w")

#     teamInfo = teamRosterCreator("https://fbref.com"+link)

#     for players in teamInfo:
#         time.sleep(3)
#         print(players)
#         specSeasonLink = "https://fbref.com/" + specificSeason(players)
#         if (specificSeason(players) != ""):
#             playerStandardStatsMaker(specSeasonLink, file1)
        
    
#     file1.close()

link = "https://fbref.com/en/squads/d07537b9/2022-2023/Brighton-and-Hove-Albion-Stats"
namingInfo = link.split("/")
file1 = open(namingInfo[-1]+".txt", "w")
teamInfo = teamRosterCreator(link)

for players in teamInfo:
    time.sleep(1)
    print(players)
    specSeasonLink = "https://fbref.com/" + specificSeason(players)
    if (specificSeason(players) != ""):
        playerStandardStatsMaker(specSeasonLink, file1)

print("done done done done done done we are done")