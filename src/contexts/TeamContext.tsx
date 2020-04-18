import React, { Component, createContext } from 'react'

type teamState = {
    team:string
}
export const TeamContext = createContext<{team:string,changeTeam:any}>({team:"rcb",changeTeam:null})
 class TeamProvider extends Component<{},teamState> {
     constructor(props:{}){
         super(props);
         this.changeTeam = this.changeTeam.bind(this)
     }
     state: teamState = {
         team:"rcb"
     }
     changeTeam(e:React.ChangeEvent<HTMLInputElement>) {
        this.setState({team:e.target.value})
     }
    render() {
        return (
            <TeamContext.Provider value={{...this.state,changeTeam:this.changeTeam}}>
                {this.props.children}
            </TeamContext.Provider>
        )
    }
}
export default TeamProvider;

/** Higher order component */

export const withTeam = (Component:any) => (props:any) => (
    <TeamContext.Consumer>
      {(value) => <Component teamContext={value} {...props} />}
    </TeamContext.Consumer>
  );