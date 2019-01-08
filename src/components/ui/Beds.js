import React from 'react'
import {SvgIcon} from '@material-ui/core'

const QUEEN = (
<path d="m23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z" fill-rule="evenodd"/>
)
const KING = QUEEN
const FULL = QUEEN
const TWIN = (<path d="m20.99 15.39-1.99-8.45v-5.44c0-.83-.68-1.5-1.5-1.5h-10a1.5 1.5 0 0 0 -1.5 1.5v5.44l-1.99 8.44-.01.12v5.01c0 .66.43 1.2 1.02 1.4-.01.03-.02.06-.02.09v1.5a.5.5 0 0 0 1 0v-1.5h13v1.5a.5.5 0 0 0 1 0v-1.5c0-.03-.01-.06-.02-.09a1.49 1.49 0 0 0 1.02-1.4v-5.01l-.01-.12zm-13.99-13.89a.5.5 0 0 1 .5-.5h9.99c.27 0 .5.23.5.5v4.5h-2v-2.51c.01-.82-.66-1.49-1.48-1.49h-4.02c-.82 0-1.49.67-1.49 1.49v2.51h-2zm8 1.99v4.02a.5.5 0 0 1 -.49.49h-4.02a.5.5 0 0 1 -.49-.49v-4.02c0-.27.22-.49.49-.49h4.02c.27 0 .49.22.49.49zm-8.01 3.63.01-.12h2v .51c0 .82.67 1.49 1.49 1.49h4.02c.82 0 1.49-.67 1.49-1.49v-.51h2l .01.12 1.86 7.88h-14.74l1.86-7.89zm13.01 13.39a.5.5 0 0 1 -.5.49h-14c-.28 0-.5-.22-.5-.49v-4.51h15z" fill-rule="evenodd"></path>)
const FLOOR_MATTRESS = (<path d="m23.97 15.32-2.78-7.14c-.47-1.22-1.87-2.18-3.18-2.18h-.45c-.45-1.14-1.66-2-2.88-2h-5.35c-1.23 0-2.44.86-2.88 2h-.45c-1.31 0-2.71.96-3.19 2.18l-2.77 7.14-.04.18v2c0 1.39 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-2zm-16.67-8.76c.22-.85 1.15-1.56 2.03-1.56h5.35c.88 0 1.81.71 2.03 1.56l.29 1.1c.06.22-.04.34-.26.34h-9.47c-.22 0-.32-.12-.26-.34zm-3.56 1.99c.33-.84 1.36-1.55 2.26-1.55h.16l-.11.41c-.22.85.35 1.59 1.22 1.59h9.45c.88 0 1.45-.74 1.23-1.59l-.1-.41h.16c.9 0 1.92.71 2.25 1.55l2.51 6.45h-21.54zm19.26 8.95c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.67-1.5-1.5v-1.5h22z" fill-rule="evenodd"></path>)
const CRIB = (<path d="m10 4 .31.66.69.11-.5.51.12.72-.62-.34-.62.34.12-.72-.5-.51.69-.11zm-1.62-1 .62-.34.62.34-.12-.72.5-.51-.69-.11-.31-.66-.31.66-.69.1.5.51zm4.93 1.66-.31-.66-.31.66-.69.11.5.51-.12.72.62-.34.62.34-.12-.72.5-.51zm9.69 6.84v12a .5.5 0 0 1 -1 0v-2.5h-20v2.5a.5.5 0 0 1 -1 0v-12c0-.08.02-.14.05-.21.01-.02.02-.03.03-.05a.49.49 0 0 1 .1-.12l.02-.02 3.82-3a .5.5 0 0 1 .3-.1h11.68v-3.99c0-1.68-1.13-3.01-2.5-3.01-1.5 0-2.52.94-2.5 2.49a.5.5 0 0 1 -1 .01c-.02-2.13 1.46-3.5 3.5-3.5 1.95 0 3.5 1.8 3.5 4.01v3.99h.68a.5.5 0 0 1 .31.11l3.82 3c .01.01.01.02.02.02a.49.49 0 0 1 .09.12c.01.02.03.03.03.05.03.06.05.13.05.21zm-3 .5v8h2v-8zm-17.05-1h18.11l-2.55-2h-13.02zm1.05 9v-8h-2v8zm3 0v-8h-2v8zm3 0v-8h-2v8zm3 0v-8h-2v8zm3 0v-8h-2v8zm3 0v-8h-2v8z" fill-rule="evenodd"></path>)
const SOFA_BED = (<path d="m22.95 16.29v-.01l-.95-1.9-.01-5.38c0-1.47-1.46-2.77-2.99-2.97v-1.53a2.5 2.5 0 0 0 -2.51-2.5h-9.98a2.5 2.5 0 0 0 -2.51 2.5v1.55c-1.57.21-3 1.48-3 2.96v5.38l-.95 1.89v.01a.49.49 0 0 0 -.05.21v3a .5.5 0 0 0 .5.5h.5v1.5a.5.5 0 0 0 1 0v-1.5h19v1.5a.5.5 0 0 0 1 0v-1.5h.5a.5.5 0 0 0 .5-.5v-3a .49.49 0 0 0 -.05-.21zm-3.95-9.25c1.02.19 1.99 1.08 1.99 1.97v3.37l-1.99-4zm-7-4.04h4.49c.83 0 1.51.67 1.51 1.5v3.5h-6zm0 6h6.19l3.5 7h-20.38l3.5-7zm-7-4.5a1.5 1.5 0 0 1 1.51-1.5h4.49v5h-6zm-3 4.51c0-.89.94-1.76 2-1.96v1.33l-2 4zm20 9.99h-21v-2h21z" fill-rule="evenodd"></path>)
const COUCH = (<path d="m22.93 14.74-1.5-2.5a.5.5 0 0 0 -.27-.22l-.16-.04v-6.48a3.5 3.5 0 0 0 -3.49-3.5h-12.02a3.51 3.51 0 0 0 -3.49 3.5v6.48a4.73 4.73 0 0 0 -.16.05.5.5 0 0 0 -.27.22l-1.5 2.5a.5.5 0 0 0 -.07.25v2.5c0 1.22.86 2.22 2 2.45v1.55a.5.5 0 0 0 1 0v-1.5h17v1.5a.5.5 0 0 0 1 0v-1.55a2.5 2.5 0 0 0 2-2.45v-2.5a.5.5 0 0 0 -.07-.26zm-17.44-11.74h12.01a2.5 2.5 0 0 1 2.5 2.5v6.24a24.2 24.2 0 0 0 -1.23-.23c-1.98-.32-4.4-.51-7.27-.51s-5.29.19-7.27.51c-.46.07-.86.15-1.23.23v-6.24c0-1.38 1.13-2.5 2.49-2.5zm-3.16 9.92c.09-.03.21-.06.36-.1a21.55 21.55 0 0 1 1.7-.34c1.93-.29 4.29-.48 7.11-.48s5.18.19 7.11.49c.67.11 1.24.22 1.7.34.15.04.27.07.36.1l1.25 2.07h-20.84zm18.18 6.08h-18.02a1.49 1.49 0 0 1 -1.49-1.5v-1.5h21v1.5c0 .83-.67 1.5-1.49 1.5zm-15.51-13.5a.5.5 0 1 1 1 0 .5.5 0 0 1 -1 0zm12 0a .5.5 0 1 1 1 0 .5.5 0 0 1 -1 0zm-6 0a .5.5 0 1 1 1 0 .5.5 0 0 1 -1 0zm-3 3a .5.5 0 1 1 1 0 .5.5 0 0 1 -1 0zm6 0a .5.5 0 1 1 1 0 .5.5 0 0 1 -1 0z" fill-rule="evenodd"></path>)
export default class Beds extends React.Component{
    constructor(props) {
        super(props);
        console.log('BEDS PROPS', props)
    }
    render(){
        switch (this.props.room_type) {
            case "1 King":return <SvgIcon>{KING}</SvgIcon>;
            case "2 Full":return <div><SvgIcon>{QUEEN}</SvgIcon>  <SvgIcon>{QUEEN}</SvgIcon></div>;
            case "1 King Bed":return <SvgIcon>{KING}</SvgIcon>;
          case "1 Queen or 2 Full":return <div><SvgIcon>{QUEEN}</SvgIcon> / <SvgIcon>{FULL}</SvgIcon><SvgIcon>{FULL}</SvgIcon></div>;
          case "2 Queen": return <div><SvgIcon>{QUEEN}</SvgIcon>  <SvgIcon>{QUEEN}</SvgIcon></div>;
          case "1 Queen":return <SvgIcon>{KING}</SvgIcon>;
          case "2 Double Beds":return <div><SvgIcon>{QUEEN}</SvgIcon>  <SvgIcon>{QUEEN}</SvgIcon></div>;
          case "2 Twin Beds":return <div><SvgIcon>{TWIN}</SvgIcon>  <SvgIcon>{TWIN}</SvgIcon></div>;
          case "2 Double":return <div><SvgIcon>{QUEEN}</SvgIcon>  <SvgIcon>{QUEEN}</SvgIcon></div>;
            default: return <div></div>
        }
    }
}
