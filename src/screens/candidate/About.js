import * as React from 'react';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';
import {DataTable} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {WebView} from 'react-native-webview';
const cheerio = require('react-native-cheerio');

const About = (props) => {
  const {id, party, constituency} = props;
  const masterData = useSelector((state) => state.masterData);
  const [loading, setLoading] = React.useState(true);

  const [moreDetails, setMoreDetails] = React.useState();

  const getPartyName = () => {
    if (!masterData) return;
    if (!party) return 'Independent';
    return masterData.parties.filter((_party) => _party.id === party)[0].name;
  };

  const getConstituency = () => {
    if (!constituency) return {name: '', dt: ''};

    const filteredConstituency = masterData.constituencies.filter(
      (c) => c.id === constituency,
    );
    if (filteredConstituency && filteredConstituency.length > 0) {
      return {
        name: filteredConstituency[0].name,
        dt: filteredConstituency[0].dt,
      };
    }
    return {name: '', dt: ''};
  };

  React.useEffect(() => {
    fetch(`https://affidavit.eci.gov.in/show-profile/${id}/MTY=/MTA=/Mw==/QUM=`)
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        const $ = cheerio.load(html);

        const applied = $(
          'main>section>div>div>div>div>div:nth-child(2) div:nth-child(2) div:nth-child(7) div:nth-child(2) div>p',
        )
          .text()
          .trim();
        const status = $(
          'main>section>div>div>div>div>div:nth-child(2) div:nth-child(2) div:nth-child(8) div:nth-child(2) div>p',
        )
          .text()
          .trim();

        const fatherName = $(
          'main>section:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) form:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div>p',
        )
          .text()
          .trim();
        const address = $(
          'main>section:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) form:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5) div>p',
        )
          .text()
          .trim();

        const gender = $(
          'main>section:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) form:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(6) div>p',
        )
          .text()
          .trim();
        const age = $(
          'main>section:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) form:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(7) div>p',
        )
          .text()
          .trim();

        setMoreDetails({
          applied: applied,
          status: status,
          fatherName: fatherName,
          address: address,
          gender: gender,
          age: age,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>Party</DataTable.Cell>
          <DataTable.Cell numeric>{getPartyName()}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Constituency</DataTable.Cell>
          <DataTable.Cell numeric>{getConstituency().name}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>District</DataTable.Cell>
          <DataTable.Cell numeric>{getConstituency().dt}</DataTable.Cell>
        </DataTable.Row>
        {moreDetails && (
          <>
            <DataTable.Row>
              <DataTable.Cell>Applied on</DataTable.Cell>
              <DataTable.Cell numeric>{moreDetails.applied}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Application Status</DataTable.Cell>
              <DataTable.Cell numeric>{moreDetails.status}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Father/Husband</DataTable.Cell>
              <DataTable.Cell numeric>{moreDetails.fatherName}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Address</DataTable.Cell>
              <DataTable.Cell numeric>{moreDetails.address}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Gender</DataTable.Cell>
              <DataTable.Cell numeric>{moreDetails.gender}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Age</DataTable.Cell>
              <DataTable.Cell numeric>{moreDetails.age}</DataTable.Cell>
            </DataTable.Row>
          </>
        )}

        <DataTable.Row>
          <DataTable.Cell>Affidavit</DataTable.Cell>
          <DataTable.Cell numeric>
            {loading && (
              <ActivityIndicator
                style={{margin: 20}}
                size="large"
                color="#3f51b5"
              />
            )}
            <View
              style={{
                backgroundColor: 'transparent',
                marginBottom: 20,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  height: 100,
                  width: 100,
                  backgroundColor: 'transparent',
                }}>
                <WebView
                  onLoad={() => setLoading(false)}
                  style={{opacity: loading ? 0 : 0.99}}
                  source={{
                    uri: `https://affidavit.eci.gov.in/show-profile/${id}/MTY=/MTA=/Mw==/QUM=`,
                  }}
                  injectedJavaScript={
                    'function hideHeaderToggle() {document.getElementsByTagName("header")[0].remove();document.getElementsByTagName("button")[0].style.background="#3f51b5";document.getElementsByTagName("button")[0].style.borderColor="#3f51b5";document.getElementsByTagName("footer")[0].remove();document.getElementsByTagName("section")[1].remove();document.getElementsByTagName("section")[0].style.padding=0;document.getElementsByClassName("profile-sec")[0].style.border="none";document.getElementsByClassName("card-header")[0].remove();document.querySelector(".card-body:nth-child(1) div>div:nth-child(1)").remove();document.getElementsByClassName("party")[0].remove();document.getElementsByClassName("pd-m")[0].style.marginTop=0;document.getElementsByClassName("card-body")[0].style.padding=0;document.getElementsByClassName("info")[0].remove();document.getElementsByClassName("pull-left")[0].remove();document.getElementsByClassName("aside-af")[0].style.minHeight=0;document.getElementsByClassName("profile-sec")[0].style.margin=0;document.getElementsByClassName("aside-af")[0].style.padding=0;document.getElementsByTagName("html")[0].style.minHeight=0;document.getElementsByTagName("body")[0].style.minHeight=0;}; hideHeaderToggle();'
                  }
                />
              </View>
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
};
export default About;
