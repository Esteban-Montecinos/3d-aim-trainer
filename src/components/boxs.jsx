
import { useStore } from '../hooks/useStore'
import { Box } from './box'

export const Boxs = () => {
  const cubes = useStore((state) => state.cubes)
  
  return cubes.map(({id,pos,color}) => {
    return (
      <Box key={id} id={id} position={pos} color={color} />
    )

  })
}
