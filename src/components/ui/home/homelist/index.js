import React,{Component} from 'react'
import './index.scss'
class Homelist extends Component{
    render(){
        return (
            <div className='app-home-homelist-box'>
                <ul>
                    <li>
                        <a className='clear'>      
                            <div className='default-img l'>
                                <img  src="https://p1.meituan.net/128.180/movie/426f1f3f1b145f763b75a60c7c39c44a535093.jpg" onerror="this.style.visibility='hidden'"/>
                            </div>                    
                            <div className = 'movie-info l'>                            
                                <h3>打哈<img></img></h3> 
                                <div className = 'detail'>
                                    <span>观众</span><b>9.1</b>
                                    <p>范文芳范文芳范文芳范文芳范文芳范文芳范文芳范文芳范文芳范文芳范文芳范文芳范文芳范文芳范文芳范文芳</p>
                                    <p>范文芳<span>80</span>囧囧<span>814</span>啦</p>
                                </div>                              
                            </div>
                            <span className = 'buyTickt r'>购票</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Homelist