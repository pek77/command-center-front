import React,{Component} from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
} from 'carbon-components-react';
import {connect} from "react-redux";
import {setRole} from '../../Ducks/Reducer';

class CenterHeader extends Component {
    constructor(props) {
        super(props);
        this.handleRole = this.handleRole.bind(this)
    }

    handleRole(roleId){
        this.props.setRole(roleId)
    }

    render() {
        const that = this
        return (
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="Command Center">
                        <SkipToContent />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName to="/" prefix="IBM GCC">
                            Command Center
                        </HeaderName>
                        <HeaderNavigation aria-label="Engagement Lead">
                            <HeaderMenuItem onClick={() => that.handleRole(3)}>
                                Engagement Lead
                            </HeaderMenuItem>
                        </HeaderNavigation>
                        <HeaderNavigation aria-label="Architect">
                            <HeaderMenuItem onClick={() => that.handleRole(1)}>
                                Architect
                            </HeaderMenuItem>
                        </HeaderNavigation>
                        <HeaderNavigation aria-label="Operation Specialist">
                            <HeaderMenuItem  onClick={() => that.handleRole(2)}>
                                Operation Specialist
                            </HeaderMenuItem>
                        </HeaderNavigation>
                        <HeaderNavigation aria-label="IT Specialist">
                            <HeaderMenuItem  onClick={() => that.handleRole(4)}>
                                IT Specialist
                            </HeaderMenuItem>
                        </HeaderNavigation>
                        <SideNav
                            aria-label="Side navigation"
                            expanded={isSideNavExpanded}
                            isPersistent={false}>
                            <SideNavItems>
                                <HeaderSideNavItems>
                                    <HeaderMenuItem  onClick={() => that.handleRole(3)}>
                                        Engagement Lead
                                    </HeaderMenuItem>
                                    <HeaderMenuItem  onClick={() => that.handleRole(1)}>
                                        Architect
                                    </HeaderMenuItem>
                                    <HeaderMenuItem  onClick={() => that.handleRole(2)}>
                                        Operation Specialist
                                    </HeaderMenuItem>
                                    <HeaderMenuItem  onClick={() => that.handleRole(4)}>
                                        IT Specialist
                                    </HeaderMenuItem>
                                </HeaderSideNavItems>
                            </SideNavItems>
                        </SideNav>
                        {/*<HeaderGlobalBar>*/}
                        {/*    <HeaderGlobalAction aria-label="Notifications">*/}
                        {/*        <Notification20 />*/}
                        {/*    </HeaderGlobalAction>*/}
                        {/*    <HeaderGlobalAction aria-label="User Avatar">*/}
                        {/*        <UserAvatar20 />*/}
                        {/*    </HeaderGlobalAction>*/}
                        {/*    <HeaderGlobalAction aria-label="App Switcher">*/}
                        {/*        <AppSwitcher20 />*/}
                        {/*    </HeaderGlobalAction>*/}
                        {/*</HeaderGlobalBar>*/}
                    </Header>
                )}
            />
        )
    }
}

export default connect(null, {setRole})(CenterHeader)
