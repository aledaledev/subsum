import React from 'react'

interface Props {
    children: string
}

export const Title: React.FC<Props> = ({children}) => <h2>{children}</h2>
