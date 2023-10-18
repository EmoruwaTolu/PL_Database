package javaCode;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import javaCode.Player;
import javaCode.playerFileReader;

public class Main {
    
    public static void main(String[] args) throws Exception{

        String folderName = "PremierLeague2022-23";

        List<List<Player>> allPlayers = new ArrayList<>();

        File dir = new File("PremierLeague2022-23");
        File[] directoryListing = dir.listFiles();

        for(File file: directoryListing){
            String curr =  file.getName();
            String input = folderName + "/"+curr;
            playerFileReader filer = new playerFileReader(input);
            List<Player> teamPlayers = filer.getPlayerList();
            allPlayers.add(teamPlayers);
        }

        System.out.println(allPlayers.get(7).get(12).getAdvancedStats().getAttackingStats().getNonPenGoals90());
        System.out.println(allPlayers.get(7));

       

    }
}
