import Note from "./Note"
import notedata from "./notedata"

export default function Notes(props) {
    const fullnotes = notedata.map((note) => {
        return <Note img={note.img} date={note.date} 
        title={note.title} explanation={note.explanation} file={note.file} code={note.code} type={note.type}/>
    })
    return(
        <>
         {fullnotes}
        </>
       
    )
}