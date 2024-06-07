import { useEffect, useState } from "react";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const TestChart = (): JSX.Element=> {
    
    // const [inst, setInst] = useState<INpstype[]>()

    // const npsdata = async () => {
    //     try {
    //       const response:INpstype[] = await AllNps()
    //       return response
    //     } catch (error) {
    //       console.log("npsdata : " + error)
    //     }
    //   }
    

    // useEffect(() =>{
    //     npsdata()
    //     .then(async res => {
    //         setInst(res)
    //         return res
    //     })
    // })


    return(<></>
    //     <div className={styles.graphBox}>
    //    <h3>Salary per Instructor</h3>
    //    <Bar
    //    data = {{
    //     labels:  inst && inst.map( i => i.stock),
    //     datasets: [{
    //         label: 'Salary',
    //         data: inst && inst.map(i => i.valuation),
    //         barThickness: 20,
    //         backgroundColor: ['#2C5282']
    //     }
    //     ]
    
    //    }}
    //    options={{
    //     responsive: true
    // }}
    //    />
       
    //    </div>
    )
}

export default TestChart