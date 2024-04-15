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
    


def seasonTeamStatistics(url, file, file1):

    html = requests.get(url)
    s = BeautifulSoup(html.content, 'html.parser')

    teamStats = s.find(id="switcher_results2021-202291")

    teamOverall = teamStats.find("table", id="results2021-202291_overall")
    teamHomeAway = teamStats.find("table", id="results2021-202291_home_away")

    overallInfo = teamOverall.find("tbody")
    overallRows = overallInfo.find_all("tr")

    homeAwayInfo = teamHomeAway.find("tbody")
    homeAwayRows = homeAwayInfo.find_all("tr")

    for tr in overallRows:

        teamRowInfo = tr.find_all("td")
        i = 1

        file.write(teamRowInfo[0].a.text +  "\n")

        while(i < len(teamRowInfo)):
            file.write(teamRowInfo[i].text + "       ")
            print(teamRowInfo[i].text)
            i += 1
        
        file.write("\n")
        
    for tr in homeAwayRows:

        teamRowInfo = tr.find_all("td")
        i = 1
        print(teamRowInfo[0].a.text)

        file1.write(teamRowInfo[0].a.text)

        while(i < len(teamRowInfo)):     
            if(len(teamRowInfo[i].get('class')) == 2):
                if(teamRowInfo[i].get('class')[1] == 'group_start'):
                    file1.write("\n")
                file1.write(teamRowInfo[i].text + "       ")
                print(teamRowInfo[i].text)
            else:
                file1.write(teamRowInfo[i].text + "       ")
                print(teamRowInfo[i].text)
                print(teamRowInfo[i].get('class') == 'group_start')
            i += 1
        
        file1.write("\n")

file2 = open("PremierLeague2021-22Overall.txt", "w")
file3 = open("PremierLeague2021-22HomeAway.txt", "w")
seasonTeamStatistics("https://fbref.com/en/comps/9/2021-2022/2021-2022-Premier-League-Stats", file2, file3)

print("done done done done done done we are done")