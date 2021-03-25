import React from 'react';
import {View} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function (props) {
  const [activeTab, setActiveTab] = React.useState(
    props.activeTab || props.children[0].props.title,
  );

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent: 'center',
        }}>
        {React.Children.map(props.children, (child, index) => {
          return (
            <Button
              mode={activeTab === child.props.title ? 'contained' : 'outlined'}
              labelStyle={{
                margin: 0,
                fontSize: 13
              }}
              contentStyle={{
                margin: 0,
                padding: 0
              }}
              style={{
                borderRadius: 0,
                borderBottomLeftRadius: index == 0 ? 5 : 0,
                borderTopLeftRadius: index == 0 ? 5 : 0,
                borderBottomRightRadius:
                  index == props.children.length - 1 ? 5 : 0,
                borderTopRightRadius:
                  index == props.children.length - 1 ? 5 : 0,
              }}
              onPress={() => setActiveTab(child.props.title)}>
              {child.props.icon ? (
                <Icon
                  name={child.props.icon}
                  size={20}
                  color={activeTab === child.props.title ? '#fff' : '#3f51b5'}
                />
              ) : (
                child.props.title
              )}
            </Button>
          );
        })}
      </View>
      {props.children.filter((_child) => _child.props.title === activeTab)[0]}
    </>
  );
}
