import { List } from '@List'

const headers = <>
    <td>Name</td>
</>

const row = (item) => <>
    <td>{item.name}</td>
</>

const Exercises = () => {
    return <List
        title='Exercises'
        entityType='exercise'
        headers={headers}
        row={row}
    />
}

export default Exercises