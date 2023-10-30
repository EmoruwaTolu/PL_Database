import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import '../styles.css';



export default function BasicTabs() {

    const [data, setData] = useState([]);
    const [view, setView] = useState(0);

    const fetchData = async () => {

        try{
            const response = await fetch(`http://localhost:3001/seasonInformation`);
            const data = await response.json();
            setData(data);
        }
        catch(error){
            console.error('Error fetching players');
        }
        
    }

    useEffect(() => {
        fetchData('');
    }, []);

    const customStyles = {
        rows: {
            style: {
                fontSize: "0.7em",
                backgroundColor: "#dee2e6" // override the row height
            },
        },
        headCells: {
            style: {
                fontSize: "1em",
                backgroundColor: "#6c757d",
                color: "white"
            },
        },
        cells: {
            style: {
                
            },
        },
    };

    const columns = [
        {
            name: 'Club',
            selector: row => <a href='/'>{row.clubname}</a>,
            width: "15%"
        },
        ,
        {
            name: 'MP',
            selector: row => parseInt(row.matchesPlayed),
            sortable: true,
            width: "8%",
        },
        {
            name: 'W',
            selector: row => parseInt(row.wins),
            sortable: true,
            width:"8%"
        },
        {
            name: 'D',
            selector: row => parseInt(row.draws),
            sortable: true,
            width:"8%"
        },
        {
            name: 'L',
            selector: row => parseInt(row.losses),
            sortable: true,
            width:"8%"
        },
        {
            name: 'GF',
            selector: row => parseInt(row.goalsScored),
            sortable: true,
            width:"8%"
        },
        {
            name: 'GA',
            selector: row => parseInt(row.goalsConceded),
            sortable: true,
            width:"8%"
        },
        {
            name: 'GD',
            selector: row => parseInt(row.goalDifference),
            sortable: true,
            width:"8%"
        },
        {
            name: 'xG',
            selector: row => parseInt(row.totalXG),
            sortable: true,
            width:"8%"
        },
        {
            name: 'xGA',
            selector: row => parseInt(row.totalXGA),
            sortable: true,
            width:"8.5%"
        },
        {
            name: 'Points',
            selector: row => parseInt(row.points),
            sortable: true,
            width:"12.5%"
        }
        
    ];


    function changeView(id){
        setView(id);
    }

    return (
        <div className='pl-season-info'>
            <div className='home-tabs'>
                <button className={view === 0 ? "active-tab" : ""} onClick={() => {changeView(0)}}>Overall</button>
                <button className={view === 1 ? "active-tab" : ""} onClick={() => {changeView(1)}}>Home</button>
                <button className={view === 2 ? "active-tab" : ""} onClick={() => {changeView(2)}}>Away</button>
            </div>
            {view === 0 && (
                <div style={{paddingTop:"2em"}}>{
                    data.length === 3 && (
                    <div className='pl-home-container'>
                        <div style={{flex:"1.5", overflow: "scroll"}}>
                            <DataTable 
                                columns={columns} 
                                data={data[0].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div style={{flex:"1"}}>5</div>
                    </div>
                    )
                }</div>)
            }
            {view === 1 && (
                <div style={{paddingTop:"2em"}}>{
                    data.length === 3 && (
                    <div className='pl-home-container'>
                        <div style={{flex:"1.5", overflow: "scroll"}}>
                            <DataTable 
                                columns={columns} 
                                data={data[1].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div style={{flex:"1"}}>5</div>
                    </div>
                    )
                }</div>)
            }
            {view === 2 && (
                <div style={{paddingTop:"2em"}}>{
                    data.length === 3 && (
                    <div className='pl-home-container'>
                        <div style={{flex:"1.5", overflow: "scroll"}}>
                            <DataTable 
                                columns={columns} 
                                data={data[2].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div style={{flex:"1"}}>5</div>
                    </div>
                    )
                }</div>)
            }
        </div>
    );
}