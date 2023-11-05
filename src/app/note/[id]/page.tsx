
export default async function NoteViewer({ params }: { params: { slug: string } }) {

    const noteDetails = await fetch('api/note?userID=clokp4tzg0004soz46ntd21uy&noteID=' + params.slug).then((r) => {
        r.json()
    })

    const noteName = await noteDetails.name;

    return <div>id = {noteName}</div>
  }