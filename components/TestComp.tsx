export function TestComp( prop:any){

    return<>
    Test
    <button onClick={()=>{
        prop.abc((prev:number)=>prev+10)
        }}>Increase</button>
    </>
}