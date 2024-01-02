
import { useStore } from '../hooks/useStore'
import { Esfera } from './esfera'

export const Esferas = () => {
  const cubes = useStore((state) => state.cubes)
  
  return cubes.map(({id,pos,color}) => {
    return (
      <Esfera key={id} id={id} position={pos} color={color} />
    )

  })
}
