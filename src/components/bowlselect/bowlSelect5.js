import React from 'react'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Plcomponent from './pl'
import Summary from './summary'
import {connect} from 'react-redux'

 let mapStateToProps=(state)=>{
    return {data:state}
  }
  function val_y(x)
  {
    var y =  175*175-(x - 140)*(x-140);
    return Math.floor(Math.sqrt(y) - 195);
  }
class Bowlselect extends React.Component { 
    constructor(){
        super();
        this.clicked = false;
        this.hdl = this.hdl.bind(this);
        this.hd2 = this.hd2.bind(this);
        this.hdl1 = this.hdl1.bind(this);
        this.startanimation = 0;
        this.btncheck = this.btncheck.bind(this);
        this.state ={
           leftbtn:0,
           rightbtn:0
        };
    }
    cl=(e)=>{
        e.target.style.transition = 'all 0.5s linear';
        document.querySelector('.mainSummaryWrap').classList.remove("circle_animation1");
        document.querySelector('.mainSummaryWrap').classList.remove("circle_animation2");
        if (this.clicked == false) {
          document.querySelector('.forSumm').style.transform = 'translateY(190px)';
          document.querySelector('.mainSummaryWrap').classList.add("circle_animation1");
          this.clicked = true;
          e.target.style.transform = 'translateY(-145px)';
          e.target.src = './images/summ1.png';
        } else {
          document.querySelector('.forSumm').style.transform = 'translateY(0px)';
          document.querySelector('.mainSummaryWrap').classList.add("circle_animation2");
          this.clicked = false;
          e.target.style.transform = 'translateY(0px)';
          e.target.src = './images/ordsm.png';
        }
    }
    componentDidMount()
    {
        this.startanimation = 0;
        this.startanimationcount = 280;
        this.interval1 = setInterval(() => {
          this.hdl1();
        }, 5);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
        
    }
    btncheck()
    {
      let tmp = document.querySelectorAll('.choosePl');
      var leftflag = 0;
      var rightflag = 0;
      for(var i = 0; i<tmp.length;i++)
      {
        var xx = tmp[i].style.transform.split(",")[0].split("(")[1];
        var xx1 = xx.slice(0, xx.length-2);
        var x = Number(xx1);
        if( x > 300)
        {
           leftflag = 1
        }
        if( x < 0)
        {
           rightflag = 1;
        }
      }
      this.setState(
        {
           leftbtn:leftflag,
           rightbtn:rightflag
        }
      )
    }
    renderbtn() {
      let leftHdl = () => {};
      let rightHdl = () => {};
      let classLeft = 'fa fa-chevron-left fa-2x arrowLeft';
      let classRight = 'fa fa-chevron-right fa-2x arrowRight';
      if (this.state.leftbtn == 1 && this.state.rightbtn == 0) {
        leftHdl = this.hd2;
        classLeft += ' activeArrow'
      } else if (this.state.rightbtn == 1 && this.state.leftbtn == 0) {
        rightHdl = this.hdl;
        classRight += ' activeArrow'
      } else if (this.state.rightbtn == 1 && this.state.leftbtn == 1){
        leftHdl = this.hd2;
        rightHdl = this.hdl;
        classLeft += ' activeArrow'
        classRight += ' activeArrow'
      }
  
      return (
        <div>
          <i
            onClick={leftHdl}
            className={classLeft}
          />
          <i
            onClick={rightHdl}
            className={classRight}
          />
        </div>
      );
    }
    hdl1(){
       this.startanimationcount-= 5;
       if(this.startanimationcount <-20)
       {
        let tmp = document.querySelectorAll('.choosePl');
        for(var i = 0; i<tmp.length;i++){
          tmp[i].style.transition = 'all 0.2s linear';
          if(tmp[i].id == 4)
           {
               tmp[i].style.transform = "translate(280px,"+val_y(280)+"px)";
           }else if(tmp[i].id == 3)
           {
               tmp[i].style.transform = "translate(215px,"+val_y(215)+"px)";
           }else if(tmp[i].id == 2)
           {
               tmp[i].style.transform = "translate(140px,"+val_y(140)+"px)";
           }else if(tmp[i].id == 1)
           {
               tmp[i].style.transform = "translate(65px,"+val_y(65)+"px)";
           }else if(tmp[i].id == 0)
           {
               tmp[i].style.transform = "translate(0px,"+val_y(0)+"px)";
           }
        }
          this.startanimation = 1;
          this.btncheck();
       }
       if(this.startanimation == 0)
       {
  
        let tmp = document.querySelectorAll('.choosePl');
        for(var i = 0; i<tmp.length;i++)
        {
           if(tmp[i].id == 0)
           {
               tmp[i].style.transform = "translate("+this.startanimationcount+"px,"+val_y(this.startanimationcount)+"px)";
           }else if(tmp[i].id == 1)
           {
             if(this.startanimationcount < 215)
             {
                var x = this.startanimationcount + 65;
                var y = val_y(x);
                tmp[i].style.transform = "translate("+x+"px,"+y+"px)";
             }
           }else if(tmp[i].id == 2)
           {
            if(this.startanimationcount < 140)
            {
               var x = this.startanimationcount + 140;
               var y = val_y(x);
               tmp[i].style.transform = "translate("+x+"px,"+y+"px)";
            }
           }else if(tmp[i].id == 3)
           {
            if(this.startanimationcount < 65)
            {
               var x = this.startanimationcount + 215;
               var y = val_y(x);
               tmp[i].style.transform = "translate("+x+"px,"+y+"px)";
            }
           }else if(tmp[i].id == 4)
           {
            if(this.startanimationcount < 10)
            {
               var x = this.startanimationcount + 280;
               var y = val_y(x);
               tmp[i].style.transform = "translate("+x+"px,"+y+"px)";
            }
           }
        }
       }
       else{
       
        clearInterval(this.interval1);
       }
    }
    hdl(){
      let tmp = document.querySelectorAll('.choosePl');
      for(var i = 0; i<tmp.length;i++)
      {
         tmp[i].style.transition = 'all 0.5s linear';
         var xx = tmp[i].style.transform.split(",")[0].split("(")[1];
         var xx1 = xx.slice(0, xx.length-2);
         var yy = tmp[i].style.transform.split(",")[1].split(")")[0];
         var yy1 = yy.slice(0, yy.length-2);
         var x = Number(xx1);
         var y = Number(yy1);
         if( x == -70 && y == -130)
         {
             tmp[i].style.transform = "translate(0px, -90px)";
         }else if( x == 0 && y == -90)
         {
             tmp[i].style.transform = "translate(65px, -37px)";
         }else if(x == 65 && y == -37)
         {
             tmp[i].style.transform = "translate(140px, -20px)";
         }else if(x == 140 && y == -20)
         {
             tmp[i].style.transform = "translate(215px, -37px)";
         }else if(x == 215 && y == -37)
         {
             tmp[i].style.transform = "translate(280px, -90px)";
         }else if(x == 280 && y == -90)
         {
             if(tmp.length > 5) {tmp[i].style.transform = "translate(350px, -130px) scale(0)";}
             else{
                  tmp[i].style.transition = 'all 0s linear';
                  tmp[i].style.transform = "translate(0px, -90px)";
             } 
         }else{
              if(x == 350 + (tmp.length - 6) * 70)
              {
                tmp[i].style.transition = 'all 0s linear';
                tmp[i].style.transform = "translate(0px, -90px)";
              }else{
                var x_next = x + 70;
                tmp[i].style.transform = "translate("+x_next+"px, -130px) scale(0)";
              }
              
         }
  
      }
      this.btncheck();
    };
    hd2(){
      let tmp = document.querySelectorAll('.choosePl');
      for(var i = 0; i<tmp.length;i++)
      {
         tmp[i].style.transition = 'all 0.5s linear';
         var xx = tmp[i].style.transform.split(",")[0].split("(")[1];
         var xx1 = xx.slice(0, xx.length-2);
         var yy = tmp[i].style.transform.split(",")[1].split(")")[0];
         var yy1 = yy.slice(0, yy.length-2);
         var x = Number(xx1);
         var y = Number(yy1);
         if( x == 0 && y == -90)
         {
             if(tmp.length > 5)
             {
                var x = 350 + (tmp.length - 6) * 70;
                // tmp[i].style.transform = "translate("+x+"px, -130px) scale(0)";
                tmp[i].style.transform = "translate(-70px, -130px) scale(0)";
             }
             else{
                  tmp[i].style.transition = 'all 0s linear';
                  tmp[i].style.transform = "translate(280px, -90px)";
             } 
         }else if(x == 65 && y == -37)
         {
             tmp[i].style.transform = "translate(0px, -90px)";
         }else if(x == 140 && y == -20)
         {
             tmp[i].style.transform = "translate(65px, -37px)";
         }else if(x == 215 && y == -37)
         {
             tmp[i].style.transform = "translate(140px, -20px)";
         }else if(x == 280 && y == -90)
         {
            tmp[i].style.transform = "translate(215px, -37px)";
         }else{
              if(x == 350 )
              {
                // tmp[i].style.transition = 'all 0s linear';
                tmp[i].style.transform = "translate(280px, -90px)";
              }else{
                var x_next = x - 70;
                tmp[i].style.transform = "translate("+x_next+"px, -130px) scale(0)";
              }
              
         }
  
      }
      this.btncheck();
    };
    render(){
        return(
            <div className="mainWrapForSect">
            <div className="bowlSelectContainer updatet forSumm">
                 <div className="circle updatetCircle">
                    <Summary/>
                   <Link to="/bowlselect4"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
                   <img onClick={this.cl.bind(this)} className="ordsm" src="./images/ordsm.png"></img>

                    <div className="selectCont regCont">
                        <span className="entered"></span>
                        <span className="entered"></span>
                        <span className="entered"></span>
                        <span className="entered"></span> 
                        <span className="active"></span>
                        <span></span>
                    </div>
                    <img className="regMainBowl" src="./images/regularBowl.png" />
                    <div className="textArea updatetTextarea"><p>Select your</p> <span>garnish</span><h2 style={{fontSize:"8px",textAlign:'center'}}>(choose any 2)</h2></div>
                </div> 
                <div className="under-sect plpops">
                {
              this.renderbtn()
            }
                    {
                        this.props.data.garnishTypes.map((item , index) => {
                           return  <Plcomponent type={'garnish'} info = {item} key= {index} id={index}/>
                        })
                    }
                </div>
                <Link className="skpBtn">Skip >></Link>
                <Link to="/bowlselect6" className="nextBtn wtCart">Next</Link>
                <Link to="/cart" className="cartBtn">Your cart</Link>
            </div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Bowlselect);