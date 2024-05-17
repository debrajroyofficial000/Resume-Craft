import {
  Document,
  StyleSheet,
  Page,
  View,
  Text,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Times-Roman",
    padding: 16,
  },
  section: {
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "heavy",
    marginBottom: 5,
    paddingVertical: 5,
    borderBottom: 1,
    borderColor: "black",
  },
  listItem: {
    marginVertical: 5,
  },
  itemTitle: {
    fontWeight: "heavy",
    fontSize: 15,
  },
  itemDescription: {
    fontWeight: "normal",
    fontSize: 12,
  },
});
const ResumePDF = ({
  personalData,
  educationalData,
  workData,
  projectData,
  skillData,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.itemTitle}>
            Name :
            <Text style={styles.itemDescription}>{personalData.name}</Text>
          </Text>
          <Text style={styles.itemTitle}>
            Email :
            <Text style={styles.itemDescription}>{personalData.email}</Text>
          </Text>
          <Text style={styles.itemTitle}>
            Phone :
            <Text style={styles.itemDescription}>
              {personalData.phoneNumber}
            </Text>
          </Text>
          <Text style={styles.itemTitle}>
            Address :
            <Text style={styles.itemDescription}>{personalData.address}</Text>
          </Text>
          <Text style={styles.itemTitle}>
            LinkedIn :
            <Link
              style={styles.itemDescription}
              src={personalData.linkedInProfile}
            >
              Link
            </Link>
          </Text>
          <Text style={styles.itemTitle}>
            Portfolio/Website :
            <Link style={styles.itemDescription} src={personalData.portfolio}>
              Link
            </Link>
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.itemTitle}>
            Degree :
            <Text style={styles.itemDescription}>{educationalData.degree}</Text>
          </Text>
          <Text style={styles.itemTitle}>
            University :
            <Text style={styles.itemDescription}>
              {educationalData.university}
            </Text>
          </Text>
          <Text style={styles.itemTitle}>
            Location :
            <Text style={styles.itemDescription}>
              {educationalData.location}
            </Text>
          </Text>
          <Text style={styles.itemTitle}>
            Starting Date :
            <Text style={styles.itemDescription}>
              {educationalData.startDate}
            </Text>
          </Text>
          <Text style={styles.itemTitle}>
            Ending Date :
            <Text style={styles.itemDescription}>
              {educationalData.endDate}
            </Text>
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {workData.map((work, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemTitle}>
                Position :
                <Text style={styles.itemDescription}>{work.role}</Text>
              </Text>
              <Text style={styles.itemTitle}>
                Organization :
                <Text style={styles.itemDescription}>{work.companyName}</Text>
              </Text>
              <Text style={styles.itemTitle}>
                Starting Date :
                <Text style={styles.itemDescription}>{work.startDate}</Text>
              </Text>
              <Text style={styles.itemTitle}>
                Ending Date :
                <Text style={styles.itemDescription}>{work.endDate}</Text>
              </Text>
              <Text style={styles.itemTitle}>
                Achievements :
                <Text style={styles.itemDescription}>{work.achievement}</Text>
              </Text>
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projectData.map((project, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemTitle}>
                Project Name :
                <Text style={styles.itemDescription}>{project.title}</Text>
              </Text>
              <Text style={styles.itemTitle}>
                Description :
                <Text style={styles.itemDescription}>
                  {project.description}
                </Text>
              </Text>
              <Text style={styles.itemTitle}>
                Technology Used :
                <Text style={styles.itemDescription}>
                  {project.technologyUsed}
                </Text>
              </Text>
              <Text style={styles.itemTitle}>
                Project Link :
                <Link style={styles.itemDescription} src={project.link}>
                  Link
                </Link>
              </Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.itemTitle}>
            Skills :
            <Text style={styles.itemDescription}>{skillData.join(", ")}</Text>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
