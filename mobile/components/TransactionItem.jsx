import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { formatDate } from "../lib/utils.js";

const CATEGORY_ICONS={
    "Food & Drinks":"fast-food",
    Grocery: "cart",
    Shopping: "shirt",
    Transportation: "car",
    Entertainment: "film",
    Bills: "receipt",
    Rent: "home",
    Income: "cash",
    Other:"ellipsis-horizontal",
}

export const TransactionItem=({item, onDelete})=>{
    const isIncome = parseFloat(item.amount) >0;
    const iconName = CATEGORY_ICONS[item.category]|| "pricetag-outline";

    return(
        <View style={styles.transactionCard} key={item.key}>
            <TouchableOpacity style={styles.transactionContent}>
                <View style={styles.categoryIconContainerr}>
                    <Ionicons name={iconName} size={30} color={isIncome ? COLORS.income : COLORS.expense} />  
                </View>
                <View style={styles.transactionLeft}>
                    <Text style={styles.transactionTitle}>{item.title}</Text>
                    <Text style={styles.transactionCategory}>{item.category}</Text>
                    <Text style={styles.transactionAmount}>{item.amount}</Text>
                </View>
                <View style={styles.transactionRight}>
                    <Text style={[styles.transactionAmount, {color: isIncome? COLORS.income : COLORS.expense}]}>
                        {isIncome? "+" : "-"} ${Math.abs(parseFloat(item.amount)).toFixed(2)}</Text>
                    <Text style={styles.transactionDate}>{formatDate(item.created_at)}</Text>
                </View>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={()=>onDelete(item.id)}>
                <Ionicons name="trash-outline" size={20} color={COLORS.expense} />
            </TouchableOpacity>
        </View>
    );
}