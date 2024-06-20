'use client'

import { RoleEnumTypes } from '@bitgouel/types'
import { createContext } from 'react'

export const AuthorityContext = createContext<RoleEnumTypes | ''>('')
