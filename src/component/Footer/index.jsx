import React, { PureComponent } from 'react'
import styles from './style.less'

const isPc = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/)

class Footer extends PureComponent {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <ul className={styles.left}>
            <li>
              <p className={styles.column}>狸猫开放平台</p>
              <span className={styles.link}>代理商登陆</span>
            </li>
            <li>
              <p className={styles.column}>加入我们</p>
              <span className={styles.link}>人才招聘</span>
            </li>
            <li>
              <p className={styles.column}>联系我们</p>
              <ul className={styles.info}>
                <li>电话：0574-27964849</li>
                <li>邮箱：markding@limao.com</li>
                <li>地址：浙江宁波慈溪市博洋智谷生活方式中心8楼804</li>
              </ul>
            </li>
          </ul>
          <img className={styles.logo} src={require('./bottom-logo.png')} alt="" />
        </div>
        <div className={styles.footerBottom}>
          <span>
            浙ICP备19027550号-1 | 浙公网安备 33028202000661号 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 法律顾问：上海市恒业律师事务所吴宸桦律师
          </span>
          <span>Copyright©2014-2021 宁波狸猫网络科技有限公司版权所有</span>
        </div>
      </div>
    )
  }
}

class FooterMobile extends PureComponent {
  render() {
    return (
      <div className={styles.footerMobile}>
        <img className={styles.logo} src={require('./bottom-logo.png')} alt="" />
        <p className={styles.column}>狸猫开放平台</p>
        <span className={styles.link}>代理商登陆</span>
        <p className={styles.column}>加入我们</p>
        <span className={styles.link}>人才招聘</span>
        <p className={styles.column}>联系我们</p>
        <ul className={styles.info}>
          <li>电话：0574-27964849</li>
          <li>邮箱：markding@limao.com</li>
          <li>地址：浙江宁波慈溪市博洋智谷生活方式中心8楼804</li>
        </ul>
        <div className={styles.footerBottom}>
          <span>浙ICP备19027550号-1 | 浙公网安备 33028202000661号</span>
          <span>法律顾问：上海市恒业律师事务所吴宸桦律师</span>
          <span>Copyright©2014-2021 宁波狸猫网络科技有限公司版权所有</span>
        </div>
      </div>
    )
  }
}

const Cmp = isPc ? Footer : FooterMobile

export default Cmp
