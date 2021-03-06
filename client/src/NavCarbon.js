import { HeaderContainer, Modal } from 'carbon-components-react';
import {Header} from 'carbon-components-react';
import { SkipToContent} from 'carbon-components-react';
import {HeaderMenuButton} from 'carbon-components-react';
import {HeaderName,HeaderMenuItem,SideNavMenuItem,SideNavMenu,HeaderMenu,SideNav,HeaderNavigation,SideNavItems} from 'carbon-components-react';
import React from 'react';
import { Component } from 'react';
import './churnForm.scss'
import { Data_132,Document32} from '@carbon/icons-react';
import DataSetDescribe from './DataComponents/DataSetDescribe.js'


class NavCarbon extends Component {
  constructor(props){
      super(props)
      this.state={
        csvData:'',
        openedDataDescribeModal:false,
        openedDataVisualizationModal:false,
      }
    }
  
  render(){
    return(
      <div>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="IBM Platform Name">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="#" prefix="IBM">
        </HeaderName>
        <HeaderNavigation aria-label="IBM">
          
          <HeaderMenu isCurrentPage aria-label="Data" menuLinkName="Data">
            <HeaderMenuItem onClick={()=>this.setState({openedDataDescribeModal:true})}>About the dataset</HeaderMenuItem>
            
            
           
          </HeaderMenu>
          
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          className='.bx--side-nav__navigation .bx--side-nav__link .bx--side-nav__link:focus'
          style={{textEmphasisColor:'white'}}
          isPersistent={false}>

            <SideNavItems>
              <SideNavMenu renderIcon={Data_132} title="Data">
                <SideNavMenuItem onClick={()=>this.setState({openedDataDescribeModal:true})}>
                <Document32 style={{width:'1.2rem',height:'1.2rem',marginRight:'1rem'}}/>About the dataset
                </SideNavMenuItem>
              
            </SideNavMenu>
            
          </SideNavItems>
        </SideNav>
      </Header>
      
    )}
    
  />
  <Modal
    open={this.state.openedDataDescribeModal}
    onRequestClose={()=>this.setState({openedDataDescribeModal:false})}
    size="md"
    modalLabel="About the Dataset"
    passiveModal
  >
    <DataSetDescribe/>

  </Modal>
  
    </div>
    )
  }
}

export default NavCarbon;
