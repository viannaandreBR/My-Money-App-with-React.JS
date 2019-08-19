import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
        <MenuTree label='Financeiro' icon='usd'>
            <MenuItem path='#billingCycles'
                label='Ciclo de Pagamentos' icon='edit' />
        </MenuTree>
    </ul>
)