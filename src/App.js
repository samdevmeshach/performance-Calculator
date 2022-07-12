import './App.css';
import React,{useEffect, useState} from 'react';
import Table from './component/Table';
import { getData, getEnvironment, getRelease } from './api/apicore';


const App = () => {

  const [current,setCurrent] = useState("")
  const [previous,setPrevious] = useState("")
  const [currentEnv,setCurrentEnv] = useState("")
  const [previousEnv,setPreviousEnv] = useState("")
  const [filter,setFilter] = useState(["mobile","desktop"]);
  const [userdata,setUserdata] = useState([]);
  const [releasedata,setReleasedata] = useState([]);
  const [env,setEnv] = useState([]);
  
  useEffect(() => {

    // Fetching All Release Datas

    getData().then((data) => {
      if (data) {
        setUserdata(data.data);
      }
    });

    // Fetching Distinct Release

    getRelease().then((data) => {
      if(data){
        setReleasedata(data.data)
      }
    })


    // Fetching Distinct Environment

    getEnvironment().then((data) => {
      if(data){
        setEnv(data.data)
      }
    })
  },[])

  const finalArray = []

    // Separating Release
    
    // Previous Release

    const previousRelease = userdata.filter(function (e) {
        return e.Release === previous;
    });


    // Current Release

      const currentRelease = userdata.filter(function (e) {
        return e.Release === current;
    });

    previousRelease.map((p) => {
      currentRelease.map((c) => {
        const array = {
          url:p.URL,
          formfactor:"",
          performanceColor:"",
          bestPracticesColor:"",
          accessibilityColor:"",
          lcpPreviousColor:"",
          lcpCurrentColor:"",
          clsPreviousColor:"",
          clsCurrentColor:"",
          seoColour:"",
          cperformance:c.Performance,
          pperformance:p.Performance,
          cbestPractices:c.BestPractices,
          pbestPractices:p.BestPractices,
          caccessibility:c.Accessibility,
          paccessibility:p.Accessibility,
          cseo:c.SEO,
          pseo:p.SEO,
          clcp:c.LCP,
          plcp:p.LCP,
          ccls:c.CLS,
          pcls:p.CLS,
        }
          if(p.URL === c.URL && p.FormFactor === c.FormFactor && p.Environment === previousEnv && c.Environment === currentEnv){
            array.formfactor = c.FormFactor ;


            // Calculating Performance

            if(c.Performance > p.Performance){
                array.performanceColor="rgb(91, 206, 100)";
            }else if(c.Performance == p.Performance){
              array.performanceColor="rgb(202, 201, 201)";
            }else{
                array.performanceColor="rgb(255, 71, 25)";
            }


            // Calculating BestPractices 


            if(c.BestPractices > p.BestPractices){
              array.bestPracticesColor="rgb(91, 206, 100)";
            }else if(c.BestPractices == p.BestPractices){
              array.bestPracticesColor="rgb(202, 201, 201)";
            }else{
                array.bestPracticesColor="rgb(255, 71, 25)";
            }


            // Calculating Accessibility

            if(c.Accessibility > p.Accessibility){
              array.accessibilityColor="rgb(91, 206, 100)";
            }else if(c.Accessibility == p.Accessibility){
              array.accessibilityColor="rgb(202, 201, 201)";
            }else{
                array.accessibilityColor="rgb(255, 71, 25)";
            }


            // Calculating SEO

            if(c.SEO > p.SEO){
              array.seoColour="rgb(91, 206, 100)";
            }else if(c.SEO == p.SEO){
              array.seoColour="rgb(202, 201, 201)";
            }else{
              array.seoColour="rgb(255, 71, 25)";
            }

            // Calculating LCP Current

            if(c.LCP < 2.5){
              array.lcpCurrentColor ="rgb(91, 206, 100)";
            }else if(c.LCP < 4.0){
              array.lcpCurrentColor ="rgb(255,191,0)";
            }else{
              array.lcpCurrentColor ="rgb(255, 71, 25)";
            }


            // Calculating LCP Previous


            if(p.LCP < 2.5){
              array.lcpPreviousColor ="rgb(91, 206, 100)";
            }else if(p.LCP < 4.0){
              array.lcpPreviousColor ="rgb(255,191,0)";
            }else{
              array.lcpPreviousColor ="rgb(255, 71, 25)";
            }

            // Calculating CLS Current

            if(c.CLS < 0.1){
              array.clsCurrentColor ="rgb(91, 206, 100)";
            }else if(c.CLS < 0.25){
              array.clsCurrentColor ="rgb(255,191,0)";
            }else{
              array.clsCurrentColor ="rgb(255, 71, 25)";
            }

            // Calculating CLS Previous

            if(p.CLS < 0.1){
              array.clsPreviousColor ="rgb(91, 206, 100)";
            }else if(p.CLS < 0.25){
              array.clsPreviousColor ="rgb(255,191,0)";
            }else{
              array.clsPreviousColor ="rgb(255, 71, 25)";
            }


            finalArray.push(array);
          }
      })
    })


    const handleToggle = f => {
      const newFilter = [...filter];
      if(!newFilter.includes(f)){
        newFilter.push(f);
      }else{
        newFilter.splice(newFilter.indexOf(f),1)
      }
      setFilter(newFilter);
    }

  return (
    <>
      <div className="container">
        <div className="input-group">

          {/* Previous Release Select */}
          <div className="form-floating">
            <select className="form-select" id="floatingSelect" onChange={(e) => (setPrevious(e.target.value))} aria-label="Floating label select example">
              <option>Choose</option>
              {
                releasedata.map((rel,i) => {
                  return(
                    <option value={rel.Release} key={i}>{rel.Release}</option>
                  )
                })
              }
            </select>
            <label>Previous Release</label>
          </div>


          <div className="form-floating w-25">
            <select className="form-select" id="floatingSelect" onChange={(e) => (setPreviousEnv(e.target.value))} aria-label="Floating label select example">
              <option>Choose</option>
              {
                env.map((e,i) => {
                  return(
                    <option value={e.Environment} key={i}>{e.Environment}</option>
                  )
                })
              }
            </select>
            <label>Previous Environment</label>
          </div>


          {/* Current Release Select */}
          <div className="form-floating">
            <select className="form-select" id="floatingSelect" onChange={(e) => (setCurrent(e.target.value))} aria-label="Floating label select example">
              <option>Choose</option>
              {
                releasedata.map((rel,i) => {
                  return(
                    <option value={rel.Release} key={i}>{rel.Release}</option>
                  )
                })
              }
            </select>
            <label >Previous Release</label>
          </div>




          <div className="form-floating w-25">
            <select className="form-select" id="floatingSelect" onChange={(e) => (setCurrentEnv(e.target.value))} aria-label="Floating label select example">
              <option>Choose</option>
              { 
                env.map((e,i) => {
                  return(
                    <option value={e.Environment} key={i}>{e.Environment}</option>
                  )
                })
              }
            </select>
            <label >Current Environment</label>
          </div>




          <div className='checkbox'>
            <input onChange={() => handleToggle("mobile")} type="checkbox" />
            <label>Desktop</label>
            <input onChange={() => handleToggle("desktop")} type="checkbox"  />
            <label>Mobile</label>
          </div>
        </div>
      </div>
      <Table data={finalArray} filter={filter} />
    </>
  );
}

export default App;