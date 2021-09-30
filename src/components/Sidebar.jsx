import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function sidebar({ items }) {
    return (
    //     <List disablePadding dense>
    //     <ListItem button>
    //       <ListItemText>Dresses</ListItemText>
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemText>Formal</ListItemText>
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemText>Jeans</ListItemText>
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemText>Skirts</ListItemText>
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemText>Tops</ListItemText>
    //     </ListItem>
    //   </List>

    <div className="sidebar">
    <List disablePadding dense>
      {items.map(({ label, name, items: subItems, ...rest }) => (
        <ListItem style={{ paddingLeft: 18 }} key={name} button {...rest}>
          <ListItemText>{label}</ListItemText>
          {Array.isArray(subItems) ? (
            <List disablePadding>
              {subItems.map((subItem) => (
                <ListItem key={subItem.name} button>
                  <ListItemText className="sidebar-item-text">
                    {subItem.label}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          ) : null}
        </ListItem>
      ))}
    </List>
  </div>
    )
}

export default sidebar
