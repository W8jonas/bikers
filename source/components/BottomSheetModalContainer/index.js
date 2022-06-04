import React, { useEffect, useRef, memo } from 'react'
import { View } from 'react-native'

// Modules
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { LinearGradient } from 'expo-linear-gradient';

function UnMemoBottomSheetModalContainer({
	onDismiss, HeaderComponent, BodyComponent, observer,
}) {
	const modalRef = useRef(null)

	useEffect(() => {
		modalRef.current?.present()
	}, [])

	useEffect(() => {
		modalRef.current?.snapToIndex(0)
	}, [observer])

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={modalRef}
				index={0}
				snapPoints={['6%', '60%']}
				enablePanDownToClose={false}
				onDismiss={onDismiss}
				handleComponent={() => null}
			>
				<LinearGradient
					style={{ flex: 1, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
					colors={['#4c669f', '#3b5998', '#192f6a']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
				>
					{HeaderComponent}

					<BottomSheetScrollView>
						{BodyComponent}
					</BottomSheetScrollView>

				</LinearGradient>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	)
}

const BottomSheetModalContainer = memo(UnMemoBottomSheetModalContainer)

export { BottomSheetModalContainer }
