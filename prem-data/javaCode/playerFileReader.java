package javaCode;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class playerFileReader {

    private List<Player> playerList = new ArrayList<>();
    
    public playerFileReader(String filename){
        List<String> listOfLines = new ArrayList<>();
        String[] listOfCoordinates = new String[18];
        String line = "";


        try{
            
            try (BufferedReader reading = new BufferedReader(new FileReader(filename))) {//try is being used here in the event the filename doesn't exist
                //System.out.println("here");
                while((line = reading.readLine()) != null){
                    listOfLines.add(line);//creating a list with all the information in each line on it
                }
            }
            // System.out.println(listOfLines.get(0));
            for(int i=1; i<listOfLines.size()-1;i+=2){//starting from 1 because the first line is not needed
                String playerName  = listOfLines.get(i);
                int nextline = i+1;
                listOfCoordinates = listOfLines.get(nextline).split("\\s+");
                
                if (listOfCoordinates[0] == null || listOfCoordinates[0].equals("")){
                    // Player player = new Player(playerName);
                    // playerList.add(player);
                }
                else if(listOfCoordinates[0].equals("GK")){

                    // shotStoppingStats shotStopping = new shotStoppingStats(Double.parseDouble(listOfCoordinates[1]), 
                    // Double.parseDouble(listOfCoordinates[2]), listOfCoordinates[3], Double.parseDouble(listOfCoordinates[4]), 
                    // listOfCoordinates[5], listOfCoordinates[6]);

                    // keeperPassing keepsPassing = new keeperPassing(Double.parseDouble(listOfCoordinates[7]), listOfCoordinates[8], 
                    // Double.parseDouble(listOfCoordinates[9]), Double.parseDouble(listOfCoordinates[10]));

                    // keeperCommandStats keepCommand = new keeperCommandStats(listOfCoordinates[11], Double.parseDouble(listOfCoordinates[12]), Double.parseDouble(listOfCoordinates[13]));

                    // keeperStats keeperStats = new keeperStats(shotStopping, keepsPassing, keepCommand);

                    // Player player = new Player(playerName);
                    // playerList.add(player);
                }
                else{
                    attackingStats playerAttackingStats = new attackingStats(Double.parseDouble(listOfCoordinates[0]), 
                    Double.parseDouble(listOfCoordinates[1]), Double.parseDouble(listOfCoordinates[2]), Double.parseDouble(listOfCoordinates[3]),
                    Double.parseDouble(listOfCoordinates[4]), Double.parseDouble(listOfCoordinates[5]), Double.parseDouble(listOfCoordinates[6]));

                    creativeStats playerCreativeStats =  new creativeStats(Double.parseDouble(listOfCoordinates[7]), listOfCoordinates[8]
                    , Double.parseDouble(listOfCoordinates[9]), Double.parseDouble(listOfCoordinates[10]), Double.parseDouble(listOfCoordinates[11]), Double.parseDouble(listOfCoordinates[12]) );

                    defensiveStats playerDefensiveStats = new defensiveStats(Double.parseDouble(listOfCoordinates[13]), Double.parseDouble(listOfCoordinates[14]), 
                    Double.parseDouble(listOfCoordinates[15]), Double.parseDouble(listOfCoordinates[16]), Double.parseDouble(listOfCoordinates[17]));

                    advancedStats playerAdvancedStats = new advancedStats(playerAttackingStats, playerDefensiveStats, playerCreativeStats);

                    Player player =  new Player(playerName, playerAdvancedStats);
                    playerList.add(player);
                }

                
                
            }
        }
        catch(FileNotFoundException e){
            System.out.println("File path does not exist");
        }
        catch(IOException e){
            System.out.println("Error");
        }
    }

    public List<Player> getPlayerList(){
        return this.playerList;
    }
}
