import {
  Document,
  StyleSheet,
  Page,
  View,
  Text,
  Link,
} from "@react-pdf/renderer";

// Styles for pdf
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  listItem: {
    marginBottom: 5,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemDescription: {
    fontStyle: "italic",
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
          <Text style={styles.listItem}>Name: {personalData.name}</Text>
          <Text style={styles.listItem}>Email: {personalData.email}</Text>
          <Text style={styles.listItem}>Phone: {personalData.phoneNumber}</Text>
          <Text style={styles.listItem}>Phone: {personalData.address}</Text>
          <Text style={styles.listItem}>
            Phone: {personalData.linkedInProfile}
          </Text>
          <Text style={styles.listItem}>Phone: {personalData.portfolio}</Text>
        </View>
        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.section}>
            <Text style={styles.itemTitle}>{educationalData.degree}</Text>
            <Text style={styles.itemTitle}>{educationalData.university}</Text>
            <Text style={styles.itemTitle}>{educationalData.location}</Text>
            <Text style={styles.itemTitle}>{educationalData.startDate}</Text>
            <Text style={styles.itemTitle}>{educationalData.endDate}</Text>
          </View>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {workData.map((work, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemTitle}>{work.role}</Text>
              <Text style={styles.itemDescription}>{work.companyName}</Text>
              <Text>{work.startDate}</Text>
              <Text>{work.endDate}</Text>
              <Text>{work.achievement}</Text>
            </View>
          ))}
        </View>
        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projectData.map((project, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemTitle}>{project.title}</Text>
              <Text style={styles.itemTitle}>{project.technologyUsed}</Text>
              <Link style={styles.itemTitle}>{project.link}</Link>
              <Text>{project.description}</Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text>{skillData.join(", ")}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
