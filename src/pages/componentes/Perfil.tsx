import React from 'react'

interface Props{
    nombre:string
    apellido:string
    edad:number
}



export const Perfil = (props:Props) => {
  return (
    <div>
        Nombre:{props.nombre}
        Apellido:{props.apellido}
        edad:{props.edad}
        {props.edad>18 && <p>Si tu eres mayor de 18 toma huevo</p>}
        {props.edad<18 && <p>a tu casa aver pocoyo</p>}

    </div>



  )
}
