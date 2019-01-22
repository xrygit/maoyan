import React,{Component} from 'react'
import './index.scss'
class Mine extends Component{
    render(){
        return (
            <div className='app-mine-box'>
            <div className ='header clear'>  
                <div className = 'header-top'>
                    <i></i>
                </div>           
                <div className='bot l'>
                     <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    <span>立即登录</span>
                </div>
                <i className="fa fa-chevron-right r" aria-hidden="true"></i>
            </div>
            <ul className = 'nav'>
                <li>
                    <i className="fa fa-film" aria-hidden="true"></i>
                    <span>电影</span>
                </li>
                <li>
                    <i class="fa fa-ticket" aria-hidden="true"></i>
                    <span>演出</span>
                </li>
                <li>
                <i class="fa fa-tv" aria-hidden="true"></i>
                    <span>电视剧</span>
                </li>
                <li>
                <i class="fa fa-star-half-empty" aria-hidden="true"></i>
                    <span>综艺</span>
                </li>
                <li>
                <i class="fa fa-book" aria-hidden="true"></i>
                    <span>书籍</span>
                </li>
            </ul>
            <p class='gray'></p>
            <div class='order-box'>
                <div className='title clear'>
                    <h3 className='l'>我的订单</h3>
                    <a className='r'>
                        <span>全部</span>
                        <i className="fa fa-chevron-right r" aria-hidden="true"></i>
                    </a>
                </div>
                <ul className='nav'>
                    <li>
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                        <span>未消费</span>
                    </li>
                    <li>
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <span>待付款</span>
                    </li>
                    <li>
                         <i class="fa fa-comment" aria-hidden="true"></i>
                        <span>待评价</span>
                    </li>
                    <li>
                        <i class="fa fa-cc-discover" aria-hidden="true"></i>
                        <span>退款</span>
                    </li>
                </ul>
            </div>
            <p class='gray'></p>
           <ul className='more-list'>
               <li className='clear'>
                   <span>优惠券</span>
                   <i className="fa fa-chevron-right r" aria-hidden="true"></i>
               </li>
               <li className='clear'>
                   <span>猫享卡</span>
                   <p>
                       <span>去绑卡</span>
                       <i className="fa fa-chevron-right r" aria-hidden="true"></i>
                   </p>
               </li>
               <li className='clear'>
                   <span>银行活动</span>
                   <i className="fa fa-chevron-right r" aria-hidden="true"></i>
               </li>
           </ul>
           <p class='gray'></p>
           <ul  className='more-list'>
               <li className='clear'>
                   <span >商城</span>
                   <i className="fa fa-chevron-right r" aria-hidden="true"></i>
               </li>
               <li className='clear'>
                   <span>我的收藏</span>
                   <i className="fa fa-chevron-right r" aria-hidden="true"></i>
               </li>
               <li className='clear'>
                   <span>猜题押电影，福利领不停</span>
                   <p>                    
                       <i className="fa fa-chevron-right r" aria-hidden="true"></i>
                   </p>
               </li>            
           </ul>
           <p class='gray'></p>
           <p class='gray'></p>
        </div>
        )
    }
}

export default Mine