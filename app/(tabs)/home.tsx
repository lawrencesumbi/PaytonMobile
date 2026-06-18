 import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    // Sample data for quick stats
    const stats = [
        { label: "Projects", value: "12", icon: "folder-open", color: "#4F46E5" },
        { label: "Tasks", value: "48", icon: "checkbox", color: "#059669" },
        { label: "Messages", value: "8", icon: "chatbubbles", color: "#D97706" },
        { label: "Files", value: "23", icon: "document-text", color: "#DC2626" },
    ] as const;

    // Sample data for recent activities
    const activities = [
        { id: 1, title: "Design Review", time: "2 hours ago", icon: "brush", color: "#4F46E5" },
        { id: 2, title: "Team Meeting", time: "4 hours ago", icon: "people", color: "#059669" },
        { id: 3, title: "Code Push", time: "Yesterday", icon: "git-branch", color: "#D97706" },
        { id: 4, title: "New Feedback", time: "Yesterday", icon: "chatbox-ellipses", color: "#DC2626" },
    ] as const;

    // Quick action buttons
    const actions = [
        { label: "New Task", icon: "add-circle", color: "#4F46E5" },
        { label: "Calendar", icon: "calendar", color: "#059669" },
        { label: "Reports", icon: "bar-chart", color: "#D97706" },
        { label: "Settings", icon: "settings", color: "#6B7280" },
    ] as const;

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <View>
                            <Text style={styles.greeting}>Good Morning 👋</Text>
                            <Text style={styles.userName}>John Doe</Text>
                        </View>
                        <TouchableOpacity style={styles.avatar}>
                            <Text style={styles.avatarText}>JD</Text>
                            <View style={styles.notificationBadge}>
                                <Text style={styles.badgeText}>3</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Search Bar */}
                    <TouchableOpacity style={styles.searchBar}>
                        <Ionicons name="search" size={20} color="#9CA3AF" />
                        <Text style={styles.searchText}>Search projects, tasks...</Text>
                    </TouchableOpacity>
                </View>

                {/* Quick Stats Section */}
                <View style={styles.statsContainer}>
                    {stats.map((stat, index) => (
                        <View key={index} style={styles.statCard}>
                            <View style={[styles.statIcon, { backgroundColor: stat.color + "15" }]}>
                                <Ionicons name={stat.icon} size={22} color={stat.color} />
                            </View>
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Quick Actions */}
                <View style={styles.actionsContainer}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.actionsGrid}>
                        {actions.map((action, index) => (
                            <TouchableOpacity key={index} style={styles.actionButton}>
                                <View style={[styles.actionIcon, { backgroundColor: action.color + "15" }]}>
                                    <Ionicons name={action.icon} size={24} color={action.color} />
                                </View>
                                <Text style={styles.actionLabel}>{action.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Recent Activity */}
                <View style={styles.activityContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Activity</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    {activities.map((item) => (
                        <View key={item.id} style={styles.activityItem}>
                            <View style={[styles.activityIcon, { backgroundColor: item.color + "15" }]}>
                                <Ionicons name={item.icon} size={20} color={item.color} />
                            </View>
                            <View style={styles.activityContent}>
                                <Text style={styles.activityTitle}>{item.title}</Text>
                                <Text style={styles.activityTime}>{item.time}</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
                        </View>
                    ))}
                </View>

                {/* Footer spacer */}
                <View style={styles.footerSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },
    scrollView: {
        flex: 1,
    },
    header: {
        backgroundColor: "#4F46E5",
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    greeting: {
        fontSize: 14,
        color: "#C7D2FE",
        fontWeight: "500",
    },
    userName: {
        fontSize: 24,
        fontWeight: "700",
        color: "#FFFFFF",
        marginTop: 2,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#6366F1",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderWidth: 2,
        borderColor: "#818CF8",
    },
    avatarText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },
    notificationBadge: {
        position: "absolute",
        top: -4,
        right: -4,
        backgroundColor: "#EF4444",
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#4F46E5",
    },
    badgeText: {
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: "700",
    },
    searchBar: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    searchText: {
        color: "#9CA3AF",
        fontSize: 15,
        marginLeft: 4,
    },
    statsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 16,
        marginTop: -20,
        gap: 10,
    },
    statCard: {
        flex: 1,
        minWidth: "45%",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    statIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    statValue: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111827",
    },
    statLabel: {
        fontSize: 12,
        color: "#6B7280",
        fontWeight: "500",
        marginTop: 2,
    },
    actionsContainer: {
        paddingHorizontal: 16,
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
    },
    actionsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 12,
        gap: 8,
    },
    actionButton: {
        flex: 1,
        minWidth: "22%",
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
    },
    actionIcon: {
        width: 48,
        height: 48,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 6,
    },
    actionLabel: {
        fontSize: 12,
        fontWeight: "600",
        color: "#374151",
    },
    activityContainer: {
        paddingHorizontal: 16,
        marginTop: 24,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    seeAll: {
        fontSize: 14,
        color: "#4F46E5",
        fontWeight: "600",
    },
    activityItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 14,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 1,
    },
    activityIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    activityContent: {
        flex: 1,
    },
    activityTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#111827",
    },
    activityTime: {
        fontSize: 12,
        color: "#9CA3AF",
        marginTop: 2,
    },
    footerSpacer: {
        height: 30,
    },
});