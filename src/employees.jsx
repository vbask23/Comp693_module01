let zak ='Zak Ruvalcaba'
let sally = 'Sally Smith'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let aaron = 'Aaron D. Tyres'
let vian = 'Vianney Baskinas'

const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{zak}</li>
        <li>{sally} </li>
        <li>{holly} </li>
        <li>{amol} </li>
        <li>{robin} </li>
        <li>{aaron} </li>
        <li>{vian} </li>
       

    </ul>
)
ReactDOM.render(element, document.getElementById('content'))