 import { Ionicons } from "@expo/vector-icons";
import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
    // Mock data
    const stats = [
        { label: "Revenue", value: "$24.5K", change: "+12.5%", icon: "trending-up", color: "#0EA5E9" },
        { label: "Projects", value: "14", change: "+3", icon: "folder", color: "#8B5CF6" },
        { label: "Team", value: "28", change: "+2", icon: "people", color: "#10B981" },
        { label: "Tasks", value: "86", change: "24 pending", icon: "checkbox", color: "#F59E0B" },
    ] as const;

    const recentTasks = [
        { id: "1", title: "Design system update", time: "10 min ago", status: "In Progress", priority: "High" },
        { id: "2", title: "Q3 financial review", time: "2 hours ago", status: "Review", priority: "Medium" },
        { id: "3", title: "Client presentation", time: "5 hours ago", status: "Completed", priority: "Low" },
        { id: "4", title: "Mobile app testing", time: "Yesterday", status: "Pending", priority: "High" },
    ];

    const quickActions = [
        { label: "New Project", icon: "add-circle-outline", color: "#0EA5E9" },
        { label: "Calendar", icon: "calendar-outline", color: "#8B5CF6" },
        { label: "Reports", icon: "document-text-outline", color: "#10B981" },
        { label: "Settings", icon: "settings-outline", color: "#6B7280" },
    ] as const;

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerTop}>
                        <View>
                            <Text style={styles.greeting}>Welcome back,</Text>
                            <Text style={styles.userName}>Alexandra Chen</Text>
                        </View>
                        <TouchableOpacity style={styles.avatarContainer}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>AC</Text>
                            </View>
                            <View style={styles.statusDot} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchWrapper}>
                        <Ionicons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
                        <Text style={styles.searchPlaceholder}>Search anything...</Text>
                        <View style={styles.searchShortcut}>
                            <Text style={styles.shortcutText}>⌘K</Text>
                        </View>
                    </View>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsContainer}>
                    {stats.map((stat, idx) => (
                        <View key={idx} style={styles.statCard}>
                            <View style={styles.statHeader}>
                                <View style={[styles.statIcon, { backgroundColor: stat.color + "15" }]}>
                                    <Ionicons name={stat.icon} size={20} color={stat.color} />
                                </View>
                                <Text style={[styles.statChange, { color: stat.change.startsWith("+") ? "#10B981" : "#EF4444" }]}>
                                    {stat.change}
                                </Text>
                            </View>
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Quick Actions */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.actionsRow}>
                        {quickActions.map((action, idx) => (
                            <TouchableOpacity key={idx} style={styles.actionItem}>
                                <View style={[styles.actionCircle, { backgroundColor: action.color + "10" }]}>
                                    <Ionicons name={action.icon} size={26} color={action.color} />
                                </View>
                                <Text style={styles.actionLabel}>{action.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Recent Tasks */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Tasks</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    {recentTasks.map((task) => (
                        <View key={task.id} style={styles.taskCard}>
                            <View style={styles.taskLeft}>
                                <View style={[styles.priorityDot, 
                                    { backgroundColor: task.priority === "High" ? "#EF4444" : 
                                        task.priority === "Medium" ? "#F59E0B" : "#10B981" }
                                ]} />
                                <View style={styles.taskContent}>
                                    <Text style={styles.taskTitle}>{task.title}</Text>
                                    <View style={styles.taskMeta}>
                                        <Text style={styles.taskTime}>{task.time}</Text>
                                        <View style={styles.statusBadge}>
                                            <Text style={styles.statusText}>{task.status}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
                        </View>
                    ))}
                </View>

                <View style={styles.footer} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F9FAFB",
    },
    scrollView: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: "#1F2937",
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 28,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 6,
    },
    headerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    greeting: {
        fontSize: 14,
        color: "#9CA3AF",
        fontWeight: "400",
        letterSpacing: 0.3,
    },
    userName: {
        fontSize: 24,
        fontWeight: "700",
        color: "#FFFFFF",
        marginTop: 2,
        letterSpacing: 0.5,
    },
    avatarContainer: {
        position: "relative",
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#4B5563",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#6B7280",
    },
    avatarText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
    statusDot: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#10B981",
        borderWidth: 2,
        borderColor: "#1F2937",
    },
    searchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.12)",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginTop: 18,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
    },
    searchIcon: {
        marginRight: 10,
    },
    searchPlaceholder: {
        flex: 1,
        fontSize: 15,
        color: "#D1D5DB",
        fontWeight: "400",
    },
    searchShortcut: {
        backgroundColor: "rgba(255,255,255,0.15)",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    shortcutText: {
        fontSize: 11,
        color: "#9CA3AF",
        fontWeight: "500",
        letterSpacing: 0.5,
    },
    statsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: -18,
        gap: 10,
    },
    statCard: {
        width: (width - 16 * 2 - 10) / 2,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
        borderWidth: 1,
        borderColor: "#F3F4F6",
    },
    statHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    statIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    statChange: {
        fontSize: 12,
        fontWeight: "600",
    },
    statValue: {
        fontSize: 24,
        fontWeight: "700",
        color: "#111827",
        letterSpacing: 0.5,
    },
    statLabel: {
        fontSize: 13,
        color: "#6B7280",
        fontWeight: "500",
        marginTop: 2,
    },
    sectionContainer: {
        paddingHorizontal: 16,
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1F2937",
        letterSpacing: 0.3,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },
    seeAll: {
        fontSize: 14,
        color: "#0EA5E9",
        fontWeight: "600",
    },
    actionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
    },
    actionItem: {
        alignItems: "center",
        flex: 1,
    },
    actionCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 6,
        backgroundColor: "#F3F4F6",
    },
    actionLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "#4B5563",
    },
    taskCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#F3F4F6",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.02,
        shadowRadius: 2,
        elevation: 1,
    },
    taskLeft: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    priorityDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 12,
    },
    taskContent: {
        flex: 1,
    },
    taskTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 4,
    },
    taskMeta: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    taskTime: {
        fontSize: 12,
        color: "#9CA3AF",
        fontWeight: "400",
    },
    statusBadge: {
        backgroundColor: "#F3F4F6",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 10,
        fontWeight: "600",
        color: "#4B5563",
        letterSpacing: 0.3,
    },
    footer: {
        height: 30,
    },
});