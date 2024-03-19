from os import stat
import requests
import time
from bs4 import BeautifulSoup

def leagueRosterCreator(url):

    html = requests.get(url)
    s = BeautifulSoup(html.content, 'html.parser')

    leagueyearid = s.find(id="results2022-202391_overall")
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

    playerLinks = []
    for playerUrls in players:
        playLink = "https://fbref.com" + str(playerUrls.a['href'])
        playerLinks.append(playLink)

    return(playerLinks)


def specificSeason(url):

    html = requests.get(url)
    s = BeautifulSoup(html.content, 'html.parser')
    final_link = ""

    hold = s.find(id="bottom_nav_container")
    uls = hold.find_all('ul')[-2]

    links = uls.find_all('a')

    for a in links:
        if(a.text == '2021-2022 Premier League'):
            final_link = a['href']
    
    print(final_link)
    return(final_link)

def playerStandardStatsMaker(url, file):
    print("got here")
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
        file.write(name.text)
        print(name.text)
    elif checkingPosMF != None:
        file.write(name.text)
        print(name.text)
    elif checkingPosCB != None:
        file.write(name.text)
        print(name.text)
    elif checkingPosFW != None:
        file.write(name.text)
        print(name.text)
    elif checkingPosAM != None:
        file.write(name.text)
        print(name.text)
    elif checkingPosFB != None:
        file.write(name.text)
        print(name.text)
    else:
        file.write(name.text)
        print(name.text)
    
    data = s.find(id="all_scout_full")

    tables = data.find_all("div", class_="table_container")
    utm = tables[0].find('table')
    tData = utm.find('tbody')
    tableRows = tData.find_all('tr')

    if(len(tables) > 1):
        utm2 = tables[1].find('table')
        file.write(utm['id'][-2:] + "," + utm2['id'][-2:] + "      ")
        tData2 = utm2.find('tbody')
    else:
        file.write(utm['id'][-2:]+ "      ")

    percentile2=""

    if(checkingPosMF is None and checkingPosCB is None and checkingPosGK is None and checkingPosFW is None and checkingPosAM is None
    and checkingPosFB is None):
        print("we don't got that")
    else:
        print("he has it")
        i = 0
        for tr in tableRows:
            time.sleep(3)
            if not tr.get('class'):

                raw_number = tr.td.text

                percentile1_body  = tr.find('td', class_="left")

                percentile1 = percentile1_body.div.text

                if(len(tables) > 1):
                    holder = tData2.find('th', text = tr.th.text)
                    siblings = holder.findNextSiblings()
                    percentile2 = siblings[1].div.text
                    
                if(percentile2 == ""):
                    file.write(raw_number + "," + percentile1 + "      ")
                    print(tr.th.text + "       " + raw_number + ", " + percentile1)

                else:
                    file.write(raw_number + "," + percentile1 + "," + percentile2 + "      ")
                    print(tr.th.text + "       " + raw_number + ", " + percentile1 + ", " + percentile2)

                i += 1
    
    if(imagediv != None):
        image = imagediv.find('img')
        file.write(' ' + image['src'])
        print(image['src'])

##------- THERE ARE TWO WAYS I HAVE INCLUDED TO GET FILES WITH PLAYER STATISTICAL INFORMATION -------##
##------- STEP 1
##------- PROVIDE THE `leagueRosterCreator` METHOD WITH A LINK TO THE PREMIER LEAGUE SEASON ON FBREF
##------- This will print the information from EVERY team's players for that season


# teamLinks = leagueRosterCreator("https://fbref.com/en/comps/9/2022-2023/2022-2023-Premier-League-Stats")
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

##------- STEP 2
##------- PROVIDE THE `teamRosterCreator` METHOD WITH A LINK TO THE PARTICULAR PREMIER LEAGUE TEAM
##------- This will print the information from the SPECIFIED team's players for that season

link = "https://fbref.com/en/squads/8cec06e1/2021-2022/Wolverhampton-Wanderers-Stats"
namingInfo = link.split("/")
file1 = open(namingInfo[-1]+".txt", "w")
teamInfo = teamRosterCreator(link)

for players in teamInfo:
    time.sleep(1)
    # print(players)
    playerLink = specificSeason(players)
    specSeasonLink = "https://fbref.com/" + playerLink
    if (playerLink != ""):
        print(playerLink)
        playerStandardStatsMaker(specSeasonLink, file1)

print("done done done done done done we are done")

##------- PLEASE NOTE THERE WILL BE SOME CHANGES THAT WILL NEED TO BE MADE TO LINES OF CODE WHEN SWITCHING BETWEEN SEASONS
##------- THESE CHANGES ARE SMALL AND JUST INVOLVE RENAMING SOME OF THE IDs YOU ARE LOOKING FOR
##------- SO FOR EXAMPLE, IN THE 2021-22 SEASON ID WOULD NEED TO BE EQAUL TO `results2021-202291_overall`